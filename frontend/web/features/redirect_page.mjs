import { openLink } from "./open_link.mjs"

export const redirectPage = async (page) => {
    const url = openLink(page)
    window.location.replace(url)
}