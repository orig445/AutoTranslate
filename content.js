document.addEventListener('keydown', async (e) => {
  // Trigger on Cmd+Q (Mac) or Ctrl+Q (Windows)
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'q') {
    const selection = window.getSelection().toString();
    if (!selection) return;
    try {
      const response = await chrome.runtime.sendMessage({ text: selection });
      const translated = response.translated || selection;
      await navigator.clipboard.writeText(translated);
      document.execCommand('paste');
    } catch (err) {
      console.error(err);
    }
  }
});
