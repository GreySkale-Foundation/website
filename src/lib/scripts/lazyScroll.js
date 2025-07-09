export function scrollReveal(node, options = {}) {
  const { threshold = 0.1, once = true, transition = 'opacity-0 translate-y-10' } = options;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        node.classList.remove(...transition.split(' '));
        node.classList.add('opacity-100', 'translate-y-0');
        if (once) observer.unobserve(node);
      }
    },
    { threshold }
  );

  node.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-[1500ms]', 'ease-out');
  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
    }
  };
}

