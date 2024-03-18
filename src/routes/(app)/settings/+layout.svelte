<script lang="ts">
  import {
    IconCreditCard,
    IconCreditCardFilled,
    IconDeviceDesktop,
    IconLockAccess,
    IconSettings,
    IconSettingsFilled,
    IconUser,
    IconUserFilled,
    IconWifi,
  } from "@tabler/icons-svelte";
  import { writable } from "svelte/store";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  const icons = [
    {
      icon: IconUser,
      filledIcon: IconUserFilled,
      name: "Profile",
      href: "/settings/profile",
      isSelected: true,
    },
    {
      icon: IconCreditCard,
      filledIcon: IconCreditCardFilled,
      name: "Membership",
      href: "/settings/memberships",
      isSelected: false,
    },
    {
      icon: IconWifi,
      filledIcon: IconWifi,
      name: "Network",
      href: "/settings/network",
      isSelected: false,
    },
    {
      icon: IconLockAccess,
      filledIcon: IconLockAccess,
      name: "Security",
      href: "/settings/security",
      isSelected: false,
    },
    {
      icon: IconDeviceDesktop,
      filledIcon: IconDeviceDesktop,
      name: "Devices",
      href: "/settings/devices",
      isSelected: false,
    },
    {
      icon: IconSettings,
      filledIcon: IconSettingsFilled,
      name: "Settings",
      href: "/settings",
      isSelected: false,
    },
  ];

  const selectedIconIndex = writable(0);
  let iconShow = false;
  function handleItemClick(index: number) {
    selectedIconIndex.set(index);
  }
</script>

<div class="drawer drawer-open font-Inter">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center pt-8">
    <slot />
  </div>
  <div class="drawer-side border font-Inter font-medium">
    <ul class="menu w-64 min-h-full bg-base-200 text-base-content">
      {#each icons as { icon, href, name, filledIcon }, index}
        <button
          on:click={() => handleItemClick(index)}
          class={index === $selectedIconIndex
            ? "flex gap-1 font-bold text-xl rounded items-center pt-2"
            : "flex gap-1 items-center pt-2"}
        >
          {#if index === $selectedIconIndex}
            <svelte:component this={filledIcon} size={32} stroke={2} />
          {:else}
            <svelte:component this={icon} size={32} stroke={2} />
          {/if}
          <li class="flex gap"><a {href}>{name}</a></li>
          </button>
      {/each}
    </ul>
  </div>
</div>
