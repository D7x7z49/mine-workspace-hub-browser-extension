export async function fetchTest(): Promise<void> {
    // 尝试获取书签，检查是否有权限
    chrome.bookmarks.getTree((bookmarkTreeNodes) => {
        if (chrome.runtime.lastError) {
            console.error('Error accessing bookmarks:', chrome.runtime.lastError);
        } else {
            console.log('Bookmarks:', bookmarkTreeNodes);
        }
    });
}