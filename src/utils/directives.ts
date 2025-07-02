export const vViewport = {
  mounted(el:any, binding:any) {
    const callback = binding.value;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => callback(entry.isIntersecting));
    }, { threshold: 0.1 });
    
    el._viewportObserver = observer;
    observer.observe(el);
  },
  unmounted(el:any) {
    if (el._viewportObserver) {
      el._viewportObserver.disconnect();
    }
  }
}
