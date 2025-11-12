chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  const text = request.text;
  if (!text) {
    sendResponse({ translated: text });
    return;
  }
  try {
    const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(text)}`);
    const result = await response.json();
    const translated = result[0].map(part => part[0]).join('');
    sendResponse({ translated });
  } catch (error) {
    console.error(error);
    sendResponse({ translated: text });
  }
  return true;
});
