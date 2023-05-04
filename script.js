function initProgressRing(progressRingEl) {
  const circleEl = progressRingEl.querySelector('.progress-ring__circle__animate');
  const radius = circleEl.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  circleEl.style.strokeDasharray = `${circumference} ${circumference}`;
  circleEl.style.strokeDashoffset = circumference;

  function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    circleEl.style.strokeDashoffset = offset;
  }

  function animate(shouldAnimate) {
    if (shouldAnimate) {
      circleEl.classList.add('animate');
    } else {
      circleEl.classList.remove('animate');
    }
  }

  function hide(shouldHide) {
    if (shouldHide) {
      progressRingEl.classList.add('hide');
    } else {
      progressRingEl.classList.remove('hide');
    }
  }

  return {
    setProgress,
    animate,
    hide,
  };
}

function handleEvents() {
  const inputEl = document.querySelector('.input_value');
  const toggleButtonAnimateEl = document.querySelector('.toggle-switch-animate');
  const toggleButtonHideEl = document.querySelector('.toggle-switch-hide');
  const progressRingEl = document.querySelector('.progress-ring');

  const progressRing = initProgressRing(progressRingEl);

  toggleButtonAnimateEl.addEventListener('click', function () {
    toggleButtonAnimateEl.classList.toggle('active');
    progressRing.animate(toggleButtonAnimateEl.classList.contains('active'));
  });

  toggleButtonHideEl.addEventListener('click', function () {
    toggleButtonHideEl.classList.toggle('active');
    progressRing.hide(toggleButtonHideEl.classList.contains('active'));
  });

  inputEl.addEventListener('change', function () {
    progressRing.setProgress(inputEl.value);
  });
}

handleEvents();
