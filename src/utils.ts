export function ScrollToFrom() {
    let id: number | null = null;
    id && clearTimeout(id);

    const anime = `bounce-reverse` as const;
    const el = document.querySelector("#reg-from");
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
    el.classList.add(anime);
    id = setTimeout(() => el.classList.remove(anime), 1200);
};

function checkVisible(elm: Element) {
    const rect = elm.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}