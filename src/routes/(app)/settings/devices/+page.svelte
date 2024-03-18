<script lang="ts">
    let deviceStore = [];
    async function addDevices(deviceStore: []) {}
</script>

<div class="w-full h-screen rounded-md">
    <div class="flex flex-col items-center mt-48 font-Inter">
        <div
            class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-3/12 border rounded-md"
        >
            <form method="POST">
                <h1>Add Device Details</h1>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="iPhone15"
                    class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none rounded-md"
                    required
                />

                <input
                    id="ip"
                    type="number"
                    name="ip"
                    placeholder="127.0.0.1"
                    class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none rounded-md"
                    required
                />
                <button
                    type="submit"
                    class="w-full py-3 mt-6 font-medium tracking-widest text-white bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none rounded-md"
                >
                    Add
                </button>
            </form>
        </div>
    </div>
</div>
