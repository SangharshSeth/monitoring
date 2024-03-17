<script lang="ts">
    import type { LayoutData } from './$types';
    
    export let data: LayoutData;
</script>
<div class="drawer drawer-open font-Inter">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center pt-8">
        <slot/>
    </div> 
    <div class="drawer-side border font-Inter">
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label> 
      <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <li><a href="/settings/profile/">Profile</a></li>
        <li><a href="/settings/demo/">Demo</a></li>
        <li><a href="/settings/profile/">Security</a></li>
        <li><a href="/settings/demo/">Network</a></li>
      </ul>
    
    </div>
  </div>
