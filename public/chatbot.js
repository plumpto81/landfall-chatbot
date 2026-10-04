// Repo path: public/chatbot.js
(function () {
  var script = document.currentScript;
  var API = (script && script.getAttribute("data-api")) || (script && script.src ? new URL(script.src).origin + "/api/chat" : "/api/chat");
  var TITLE = (script && script.getAttribute("data-title")) || "Questions? Ask here";
  var COLOR = (script && script.getAttribute("data-color")) || "#1f5f8b";
  var GREETING =
    (script && script.getAttribute("data-greeting")) ||
    "Hello. Ask me about hiring temporary foreign workers in Canada, or about recruiter licensing and employer registration by province.";
  var history = [];
  var busy = false;

  var css =
    "#cb-btn{position:fixed;bottom:20px;right:20px;width:56px;height:56px;border-radius:50%;border:none;background:" + COLOR + ";color:#fff;font-size:26px;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,.25);z-index:99999}" +
    "#cb-box{position:fixed;bottom:88px;right:20px;width:350px;max-width:calc(100vw - 40px);height:480px;max-height:calc(100vh - 120px);background:#fff;border-radius:12px;box-shadow:0 8px 28px rgba(0,0,0,.28);display:none;flex-direction:column;overflow:hidden;z-index:99999;font-family:system-ui,-apple-system,Segoe UI,sans-serif}" +
    "#cb-box.open{display:flex}" +
    "#cb-head{background:" + COLOR + ";color:#fff;padding:12px 14px;font-weight:600}" +
    "#cb-msgs{flex:1;overflow-y:auto;padding:12px;background:#f4f6f8}" +
    ".cb-m{max-width:88%;padding:8px 12px;margin:6px 0;border-radius:14px;font-size:14px;line-height:1.45;white-space:pre-wrap;word-wrap:break-word}" +
    ".cb-m a{color:inherit;text-decoration:underline}" +
    ".cb-u{background:" + COLOR + ";color:#fff;margin-left:auto;border-bottom-right-radius:4px}" +
    ".cb-b{background:#fff;color:#222;border:1px solid #dde2e7;border-bottom-left-radius:4px}" +
    "#cb-form{display:flex;border-top:1px solid #dde2e7}" +
    "#cb-in{flex:1;border:none;padding:12px;font-size:14px;outline:none}" +
    "#cb-send{border:none;background:#fff;color:" + COLOR + ";font-weight:600;padding:0 14px;cursor:pointer}";

  var style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  var btn = document.createElement("button");
  btn.id = "cb-btn";
  btn.setAttribute("aria-label", "Open chat");
  btn.textContent = "\uD83D\uDCAC";

  var box = document.createElement("div");
  box.id = "cb-box";
  box.innerHTML =
    '<div id="cb-head"></div><div id="cb-msgs"></div>' +
    '<form id="cb-form"><input id="cb-in" maxlength="500" placeholder="Type your question..." autocomplete="off"><button id="cb-send" type="submit">Send</button></form>';

  document.body.appendChild(btn);
  document.body.appendChild(box);

  box.querySelector("#cb-head").textContent = TITLE;
  var msgs = box.querySelector("#cb-msgs");
  var form = box.querySelector("#cb-form");
  var input = box.querySelector("#cb-in");

  var LINK_RE = /(https?:\/\/[^\s]+|[\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g;

  function setText(el, text) {
    el.textContent = "";
    var parts = String(text).split(LINK_RE);
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i];
      if (i % 2 === 1) {
        var trail = "";
        var m = p.match(/[.,;:!?)]+$/);
        if (m) {
          trail = m[0];
          p = p.slice(0, -trail.length);
        }
        var a = document.createElement("a");
        a.textContent = p;
        a.href = /^https?:/.test(p) ? p : "mailto:" + p;
        if (/^https?:/.test(p)) {
          a.target = "_blank";
          a.rel = "noopener noreferrer";
        }
        el.appendChild(a);
        if (trail) el.appendChild(document.createTextNode(trail));
      } else if (p) {
        el.appendChild(document.createTextNode(p));
      }
    }
  }

  function add(text, who) {
    var d = document.createElement("div");
    d.className = "cb-m " + (who === "user" ? "cb-u" : "cb-b");
    setText(d, text);
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
    return d;
  }

  add(GREETING, "bot");

  btn.addEventListener("click", function () {
    box.classList.toggle("open");
    if (box.classList.contains("open")) input.focus();
  });

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    var text = input.value.trim();
    if (!text || busy) return;
    busy = true;
    input.value = "";
    add(text, "user");
    history.push({ role: "user", content: text });
    var thinking = add("...", "bot");
    try {
      var r = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      var data = await r.json();
      var reply = data.reply || data.error || "Sorry, something went wrong.";
      setText(thinking, reply);
      if (data.reply) history.push({ role: "assistant", content: data.reply });
      else history.pop();
    } catch (err) {
      setText(thinking, "Connection problem. Please try again.");
      history.pop();
    }
    busy = false;
    msgs.scrollTop = msgs.scrollHeight;
  });
})();
