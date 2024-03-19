<script lang="ts">
  import github from "$lib/assets/github.png";
  import google from "$lib/assets/google.png";
  import microsoft from "$lib/assets/microsoft.png";
  import twitter from "$lib/assets/twitter.png";
  const oauths = [
    {
      image: github,
      href: "/app",
      alt: "Github Icon",
    },
    {
      image: google,
      href: "/google",
      alt: "Google Icon",
    },
    {
      image: twitter,
      href: "/",
      alt: "Twitter Icon",
    },
    {
      image: microsoft,
      href: "/microsoft",
      alt: "Microsoft Icon",
    },
  ];
  export let data;
</script>

<div class="flex flex-col items-center mt-48 font-Inter">
  <div
    class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-3/12 border rounded-md"
  >
    <form method="POST">
      <label for="email" class="block text-xs font-semibold mt-4">E-MAIL</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="john.doe@company.com"
        autocomplete="email"
        class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none rounded-md"
        required
      />
      <label for="password" class="block mt-2 text-xs font-semibold uppercase"
        >Password</label
      >
      <input
        id="password"
        type="password"
        name="password"
        placeholder="********"
        autocomplete="current-password"
        class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none rounded-md"
        required
      />
      <button
        type="submit"
        class="w-full py-3 mt-6 font-medium tracking-widest text-white bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none rounded-md"
      >
        SIGN IN
      </button>
      <p
        class="flex justify-between mt-4 text-xs text-gray-500 cursor-pointer hover:text-black"
      >
        Forgot password?
      </p>
    </form>
    <div class="flex flex-row justify-center items-center mt-4">
      <div class="h-1 w-full border bg-gray-400 rounded-lg"></div>
      <p class="px-2 text-slate-900">OR</p>
      <div class="h-1 w-full border bg-gray-400 rounded-lg"></div>
    </div>

    <div class="flex flex-row gap-2 justify-center mt-4">
      {#each oauths as oauth}
        <a href={oauth.href} class="avatar p-3 border rounded-md mb-4">
          <div class="w-8 rounded">
            <img src={oauth.image} alt={oauth.alt} />
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>
