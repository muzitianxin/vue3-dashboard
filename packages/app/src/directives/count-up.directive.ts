import { Directive, DirectiveHook } from "vue";
import { CountUp, CountUpOptions } from "countup.js";

export interface VCountUpOptions extends CountUpOptions {
  endVal: number;
}

const countup: DirectiveHook = function (el, binding) {
  let options, val;
  if (isNaN(parseFloat(binding.value))) {
    const { endVal, ..._options } = binding.value as VCountUpOptions;
    val = endVal;
    options = _options;
  } else {
    val = binding.value;
    options = {};
  }
  const countUp = new CountUp(el, val, options);
  if (!countUp.error) countUp.start();
};

export const vCountUp: Directive = {
  mounted: countup,
  updated: countup,
  unmounted: function (el) {},
};
