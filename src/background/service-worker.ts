// src/background/service-worker.ts

import { fetchTest } from './sw-test';

chrome.runtime.onInstalled.addListener(() => {
  console.log('Service Worker installed');
  fetchTest();
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'logBookmarks') {
    fetchTest();
    sendResponse({ status: 'Bookmarks fetched' });
  }
});
