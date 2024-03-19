<script lang="ts">
  import {
    IconCreditCard,
    IconCreditCardFilled,
    IconDeviceDesktop,
    IconLockAccess,
    IconSettings2,
    IconSettingsFilled,
    IconSettings,
    IconUser,
    IconUserFilled,
    IconVideo,
    IconWifi,
    IconFriends,
  } from "@tabler/icons-svelte";
  import { writable } from "svelte/store";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  const icons = [
    {
      icon: IconUser,
      filledIcon: IconUserFilled,
      name: "Profile",
      href: "/app/profile",
      isSelected: true,
    },
    {
      icon: IconCreditCard,
      filledIcon: IconCreditCardFilled,
      name: "Membership",
      href: "/app/memberships",
      isSelected: false,
    },
    {
      icon: IconVideo,
      filledIcon: IconWifi,
      name: "eSports",
      href: "/app/esports",
      isSelected: false,
    },
    {
      icon: IconLockAccess,
      filledIcon: IconLockAccess,
      name: "Security",
      href: "/app/security",
      isSelected: false,
    },
    {
      icon: IconDeviceDesktop,
      filledIcon: IconDeviceDesktop,
      name: "Devices",
      href: "/app/devices",
      isSelected: false,
    },
    {
      icon: IconFriends,
      filledIcon: IconFriends,
      name: "Find Players",
      href: "/app/find-players",
      isSelected: false,
    },
    {
      icon: IconSettings,
      filledIcon: IconSettingsFilled,
      name: "Settings",
      href: "/app/settings",
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
