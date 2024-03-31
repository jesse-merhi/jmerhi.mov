export const  typeSentence = async (
    sentence: string,
    binding: HTMLElement,
    delay = 80,
  ) => {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
      if (typeof document != undefined) {
        binding.innerHTML += letters[i];
        await waitForMs(delay);
        i++;
      }
    }
    return;
  }

  export const waitForMs =  (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  export const random = (min: number, max: number) =>  {
    return Math.floor(Math.random() * (max - min) + min);
  }
  export const  deleteSentence = async(binding: HTMLElement, delay = 80) => {
    let i = 0;
    let lengthInner = binding.innerHTML.length;
    while (i < lengthInner) {
      if (typeof document != undefined) {
        binding.innerHTML = binding.innerHTML.slice(0, -1);
        await waitForMs(delay);
        i++;
      }
    }
      await waitForMs(500);
    return;
  }
  
