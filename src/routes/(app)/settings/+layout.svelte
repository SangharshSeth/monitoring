<script lang="ts">
  import {
    IconBrowser,
    IconDeviceDesktop,
    IconLockAccess,
    IconSettings,
    IconUser,
    IconWifi,
    IconPremiumRights,
  } from "@tabler/icons-svelte";
  import type { LayoutData } from "./$types";
  export let data: LayoutData;
  const icons = [
    {
      icon: IconUser,
      name: "Profile",
      href: "/settings/profile",
      isSelected: true,
    },
    {
      icon: IconPremiumRights,
      name: "Membership",
      href: "/settings/memberships",
      isSelected: false,
    },

    {
      icon: IconWifi,
      name: "Network",
      href: "/settings/network",
      isSelected: false,
    },
    {
      icon: IconLockAccess,
      name: "Security",
      href: "/settings/security",
      isSelected: false,
    },
    {
      icon: IconDeviceDesktop,
      name: "Devices",
      href: "/settings/devices",
      isSelected: false,
    },
    {
      icon: IconSettings,
      name: "Settings",
      href: "/settings",
      isSelected: false,
    },
  ];
</script>

<div class="drawer drawer-open font-Inter">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center pt-8">
    <slot />
  </div>
  <div class="drawer-side border font-Inter font-medium">
    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"
    ></label>
    <ul class="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
      {#each icons as { icon, href, name, isSelected }}
        <div
          class={isSelected
            ? "flex gap-1 bg-slate-900 text-white rounded items-center pt-2"
            : "flex gap-1 items-center pt-2"}
        >
          <svelte:component this={icon} size={32} stroke={1} />
          <li class="flex gap"><a {href}>{name}</a></li>
        </div>
      {/each}
    </ul>
  </div>
</div>
