export function ProgressLabel() {
    return (
    
    <div class="relative mb-5 mt-10 h-5 rounded-full bg-gray-200">
        <div class=" mb-5 h-full animate-pulse rounded-full bg-blue-500" style={{width: "7%"}}>
            <span class="absolute inset-0 flex items-center justify-center text-xs font-semibold text-black">4% (of 4,611,640 homes)</span>
        </div>
    </div>
    );
}

export default ProgressLabel;