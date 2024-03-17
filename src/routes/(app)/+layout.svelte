<script lang="ts">
  export let data;
</script>

<div class="navbar bg-base-100 rounded-md font-Inter border">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost font-bold text-4xl">{data.name}</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/">{data.pricing}</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/settings">Settings</a></li>
    </ul>
  </div>
</div>
<slot />
