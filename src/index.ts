import { getSelectedText, showHUD, Clipboard } from "@raycast/api";
const didYouMean = require('google-did-you-mean');

async function main() {
    const selectedText = await getSelectedText();
    const query = await didYouMean(selectedText);

    if (query.error) {
        await showHUD(query.error);
        return;
    }

    await Clipboard.paste(query.suggestion);
}

export default main;
