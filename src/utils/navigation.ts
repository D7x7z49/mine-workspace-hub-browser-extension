export const openExtensionPage = async (targetUrl: string, checkIfOpen = true) => {
  const homeUrl = chrome.runtime.getURL(targetUrl);

  if (checkIfOpen) {
    const tabs = await chrome.tabs.query({});

    const existingTab = tabs.find((tab) => homeUrl === tab.url);

    if (existingTab && existingTab.id && existingTab.windowId) {
      await chrome.tabs.update(existingTab.id as number, { active: true });
      await chrome.windows.update(existingTab.windowId as number, { focused: true });

      return;
    }
  }

  chrome.tabs.create({ url: homeUrl });
};
