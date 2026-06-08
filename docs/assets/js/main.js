const filters = document.querySelectorAll("[data-filter]");
const resultVideos = document.querySelectorAll(".result-video");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const selected = filter.dataset.filter;

    filters.forEach((item) => item.classList.toggle("active", item === filter));
    resultVideos.forEach((video) => {
      video.hidden = selected !== "all" && video.dataset.kind !== selected;
    });
  });
});

const copyButton = document.querySelector("[data-copy-target]");

copyButton?.addEventListener("click", async () => {
  const target = document.getElementById(copyButton.dataset.copyTarget);
  if (!target) return;

  try {
    await navigator.clipboard.writeText(target.textContent);
    copyButton.querySelector("span").textContent = "Copied";
    window.setTimeout(() => {
      copyButton.querySelector("span").textContent = "Copy";
    }, 1600);
  } catch {
    copyButton.querySelector("span").textContent = "Select";
  }
});
