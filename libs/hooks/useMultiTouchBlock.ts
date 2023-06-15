const useMultiTouchBlock = () => {
  const blockMultiTouch = () => {
    if (typeof document === "undefined") return;

    window.addEventListener(
      "touchmove",
      ev => {
        if (ev.touches.length > 1) {
          ev.preventDefault();
          ev.stopImmediatePropagation();
        }
      },
      { passive: false },
    );
  };

  return [blockMultiTouch];
};

export { useMultiTouchBlock };
