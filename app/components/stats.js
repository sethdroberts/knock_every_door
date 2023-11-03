import ProgressLabel from './progress'

const Stats = () => {
    return (
<div id="stats" class="max-w-7xl mx-auto  px-4 sm:px-6 lg:py-24 lg:px-8">
    <h2 class="text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our progress so far:</h2>
    <div class="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-4">
        <div class="bg-white overflow-hidden shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
                <dl>
                    <dt class="text-sm leading-5 font-medium text-gray-500 truncate">Doors knocked</dt>
                    <dd class="mt-1 text-3xl leading-9 font-semibold text-indigo-600">193,000</dd>
                </dl>
            </div>
        </div>
        <div class="bg-white overflow-hidden shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
                <dl>
                    <dt class="text-sm leading-5 font-medium text-gray-500 truncate">Literature distributed</dt>
                    <dd class="mt-1 text-3xl leading-9 font-semibold text-indigo-600">78,000</dd>
                </dl>
            </div>
        </div>
        <div class="bg-white overflow-hidden shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
                <dl>
                    <dt class="text-sm leading-5 font-medium text-gray-500 truncate">Outreach events</dt>
                    <dd class="mt-1 text-3xl leading-9 font-semibold text-indigo-600">73</dd>
                </dl>
            </div>
        </div>
        <div class="bg-white overflow-hidden shadow sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
                <dl>
                    <dt class="text-sm leading-5 font-medium text-gray-500 truncate">Fundraised for literature</dt>
                    <dd class="mt-1 text-3xl leading-9 font-semibold text-indigo-600">$40,000</dd>
                </dl>
            </div>
        </div>
    </div>
    <div class="max-w-7xl mx-auto  px-4 sm:px-6 lg:py-24 lg:px-8">
    < ProgressLabel />
    </div>
</div>
    );
}

export default Stats;