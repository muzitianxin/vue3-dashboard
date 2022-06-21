const apis: Record<string, Array<{ name: string; desc: string }>> = {
  Browser: [
    {
      name: "useBluetooth",
      desc: "a reactive for working with the Web Bluetooth API which provides the ability to connect and interact with Bluetooth Low Energy peripherals",
    },
    { name: "useBreakpoints", desc: "reactive viewport breakpoints" },
    { name: "useBroadcastChannel", desc: "reactive BroadcastChannel API" },
    { name: "useBrowserLocation", desc: "reactive browser location" },
    { name: "useClipboard", desc: "reactive Clipboard API" },
    {
      name: "useColorMode",
      desc: "reactive color mode (dark / light / customs) with auto data persistence",
    },
    { name: "useCssVar", desc: "manipulate CSS variables" },
    { name: "useDark", desc: "reactive dark mode with auto data persistence" },
    { name: "useEventListener", desc: "use EventListener with ease" },
    { name: "useEyeDropper", desc: "reactive EyeDropper API" },
    { name: "useFavicon", desc: "reactive favicon" },
    {
      name: "useFileSystemAccess",
      desc: "create and read and write local files with FileSystemAccessAPI",
    },
    { name: "useFullscreen", desc: "reactive Fullscreen API" },
    {
      name: "useGamepad",
      desc: "provides reactive bindings for the Gamepad API",
    },
    { name: "useImage", desc: "reactive load an image in the browser" },
    {
      name: "useMediaControls",
      desc: "reactive media controls for both audio and video elements",
    },
    { name: "useMediaQuery", desc: "reactive Media Query" },
    { name: "useMemory", desc: "reactive Memory Info" },
    { name: "usePermission", desc: "reactive Permissions API" },
    {
      name: "usePreferredColorScheme",
      desc: "reactive prefers-color-scheme media query",
    },
    { name: "usePreferredDark", desc: "reactive dark theme preference" },
    { name: "usePreferredLanguages", desc: "reactive Navigator Languages" },
    { name: "useScreenOrientation", desc: "reactive Screen Orientation API" },
    { name: "useScreenSafeArea", desc: "reactive env(safe-area-inset-*)" },
    { name: "useScriptTag", desc: "script tag injecting" },
    { name: "useShare", desc: "reactive Web Share API" },
    { name: "useStyleTag", desc: "inject reactive style element in head" },
    { name: "useTitle", desc: "reactive document title" },
    { name: "useUrlSearchParams", desc: "reactive URLSearchParams" },
    { name: "useVibrate", desc: "reactive Vibration API" },
    {
      name: "useWakeLock",
      desc: "reactive Screen Wake Lock API provides a way to prevent devices from dimming or locking the screen when an application needs to keep running",
    },
    { name: "useWebNotification", desc: "reactive Notification" },
  ],
  Sensors: [
    { name: "onClickOutside", desc: "listen for clicks outside of an element" },
    { name: "onKeyStroke", desc: "listen for keyboard key being stroked" },
    { name: "onLongPress", desc: "listen for a long press on an element" },
    {
      name: "onStartTyping",
      desc: "fires when users start typing on non-editable elements",
    },
    { name: "useBattery", desc: "reactive Battery Status API" },
    { name: "useDeviceMotion", desc: "reactive DeviceMotionEvent" },
    { name: "useDeviceOrientation", desc: "reactive DeviceOrientationEvent" },
    {
      name: "useDevicePixelRatio",
      desc: "reactively track window.devicePixelRatio",
    },
    {
      name: "useDevicesList",
      desc: "reactive enumerateDevices listing avaliable input/output devices",
    },
    {
      name: "useDisplayMedia",
      desc: "reactive mediaDevices.getDisplayMedia streaming",
    },
    { name: "useElementByPoint", desc: "reactive element by point" },
    { name: "useElementHover", desc: "reactive element's hover state" },
    {
      name: "useFocus",
      desc: "reactive utility to track or set the focus state of a DOM element",
    },
    {
      name: "useFocusWithin",
      desc: "reactive utility to track if an element or one of its decendants has focus",
    },
    { name: "useFps", desc: "reactive FPS (frames per second)" },
    { name: "useGeolocation", desc: "reactive Geolocation API" },
    { name: "useIdle", desc: "tracks whether the user is being inactive" },
    { name: "useInfiniteScroll", desc: "infinite scrolling of the element" },
    { name: "useKeyModifier", desc: "reactive Modifier State" },
    { name: "useMagicKeys", desc: "reactive keys pressed state" },
    { name: "useMouse", desc: "reactive mouse position" },
    { name: "useMousePressed", desc: "reactive mouse pressing state" },
    {
      name: "useNavigatorLanguage",
      desc: "watch for changes being made to the navigator language preference by the user",
    },
    { name: "useNetwork", desc: "reactive Network status" },
    { name: "useOnline", desc: "reactive online state" },
    {
      name: "usePageLeave",
      desc: "reactive state to show whether the mouse leaves the page",
    },
    { name: "useParallax", desc: "create parallax effect easily" },
    { name: "usePointer", desc: "reactive pointer state" },
    {
      name: "usePointerSwipe",
      desc: "reactive swipe detection based on PointerEvents",
    },
    { name: "useScroll", desc: "reactive scroll position and state" },
    { name: "useScrollLock", desc: "lock scrolling of the element" },
    { name: "useSpeechRecognition", desc: "reactive SpeechRecognition" },
    { name: "useSpeechSynthesis", desc: "reactive SpeechSynthesis" },
    { name: "useSwipe", desc: "reactive swipe detection based on TouchEvents" },
    {
      name: "useTextSelection",
      desc: "reactively track user text selection based on Window.getSelection",
    },
    {
      name: "useUserMedia",
      desc: "reactive mediaDevices.getUserMedia streaming",
    },
  ],
  Animation: [
    {
      name: "useInterval",
      desc: "reactive counter increases on every interval",
    },
    { name: "useIntervalFn", desc: "wrapper for setInterval with controls" },
    { name: "useNow", desc: "reactive current Date instance" },
    { name: "useRafFn", desc: "call function on every requestAnimationFrame" },
    {
      name: "useTimeout",
      desc: "update value after a given time with controls",
    },
    { name: "useTimeoutFn", desc: "wrapper for setTimeout with controls" },
    { name: "useTimestamp", desc: "reactive current timestamp" },
    { name: "useTransition", desc: "transition between values" },
  ],
  State: [
    {
      name: "createGlobalState",
      desc: "keep states in the global scope to be reusable across Vue instances",
    },
    {
      name: "createInjectionState",
      desc: "create global state that can be injected into components",
    },
    {
      name: "createSharedComposable",
      desc: "make a composable function usable with multiple Vue instances",
    },
    { name: "useAsyncState", desc: "reactive async state" },
    {
      name: "useDebouncedRefHistory",
      desc: "shorthand for useRefHistory with debounced filter",
    },
    { name: "useLocalStorage", desc: "reactive LocalStorage" },
    {
      name: "useManualRefHistory",
      desc: "manually track the change history of a ref when the using calls commit()",
    },
    { name: "useRefHistory", desc: "track the change history of a ref" },
    { name: "useSessionStorage", desc: "reactive SessionStorage" },
    { name: "useStorage", desc: "reactive LocalStorage/SessionStorage" },
    { name: "useStorageAsync", desc: "reactive Storage in with async support" },
    {
      name: "useThrottledRefHistory",
      desc: "shorthand for useRefHistory with throttled filter",
    },
  ],
  Elements: [
    { name: "useActiveElement", desc: "reactive document.activeElement" },
    {
      name: "useDocumentVisibility",
      desc: "reactively track document.visibilityState",
    },
    { name: "useDraggable", desc: "make elements draggable" },
    { name: "useDropZone", desc: "create an zone where files can be dropped" },
    {
      name: "useElementBounding",
      desc: "reactive bounding box of an HTML element",
    },
    { name: "useElementSize", desc: "reactive size of an HTML element" },
    {
      name: "useElementVisibility",
      desc: "tracks the visibility of an element within the viewport",
    },
    {
      name: "useIntersectionObserver",
      desc: "detects that a target element's visibility",
    },
    {
      name: "useMouseInElement",
      desc: "reactive mouse position related to an element",
    },
    {
      name: "useMutationObserver",
      desc: "watch for changes being made to the DOM tree",
    },
    {
      name: "useResizeObserver",
      desc: "reports changes to the dimensions of an Element's content or the border-box",
    },
    {
      name: "useWindowFocus",
      desc: "reactively track window focus with window.onfocus and window.onblur events",
    },
    { name: "useWindowScroll", desc: "reactive window scroll" },
    { name: "useWindowSize", desc: "reactive window size" },
  ],
  Component: [
    { name: "computedInject", desc: "combine computed and inject" },
    {
      name: "templateRef",
      desc: "shorthand for binding ref to template element",
    },
    { name: "tryOnBeforeMount", desc: "safe onBeforeMount" },
    { name: "tryOnBeforeUnmount", desc: "safe onBeforeUnmount" },
    { name: "tryOnMounted", desc: "safe onMounted" },
    { name: "tryOnScopeDispose", desc: "safe onScopeDispose" },
    { name: "tryOnUnmounted", desc: "safe onUnmounted" },
    { name: "unrefElement", desc: "unref for dom element" },
    {
      name: "useCurrentElement",
      desc: "get the DOM element of current component as a ref",
    },
    { name: "useMounted", desc: "mounted state in ref" },
    {
      name: "useTemplateRefsList",
      desc: "shorthand for binding refs to template elements and components inside v-for",
    },
    { name: "useVirtualList", desc: "create virtual lists with ease" },
    { name: "useVModel", desc: "shorthand for v-model binding" },
    { name: "useVModels", desc: "shorthand for props v-model binding" },
  ],
  Watch: [
    { name: "until", desc: "promised one-time watch for changes" },
    { name: "watchAtMost", desc: "watch with the number of times triggered" },
    { name: "watchDebounced", desc: "debounced watch" },
    { name: "watchIgnorable", desc: "ignorable watch" },
    { name: "watchOnce", desc: "watch that only triggers once" },
    { name: "watchPausable", desc: "pausable watch" },
    { name: "watchThrottled", desc: "throttled watch" },
    {
      name: "watchWithFilter",
      desc: "watch with additional EventFilter control",
    },
    { name: "whenever", desc: "shorthand for watching value to be truthy" },
  ],
  Network: [
    {
      name: "useEventSource",
      desc: "an EventSource or Server-Sent-Events instance opens a persistent connection to an HTTP server",
    },
    {
      name: "useFetch",
      desc: "reactive Fetch API provides the ability to abort requests",
    },
    { name: "useWebSocket", desc: "reactive WebSocket client" },
  ],
  Utilities: [
    { name: "computedAsync", desc: "computed for async functions" },
    { name: "computedEager", desc: "eager computed without lazy evaluation" },
    {
      name: "computedWithControl",
      desc: "explicitly define the deps of computed",
    },
    { name: "createEventHook", desc: "utility for creating event hooks" },
    {
      name: "createUnrefFn",
      desc: "make a plain function accepting ref and raw values as arguments",
    },
    { name: "extendRef", desc: "add extra attributes to Ref" },
    { name: "get", desc: "shorthand for accessing ref.value" },
    { name: "isDefined", desc: "non-nullish checking type guard for Ref" },
    { name: "logicAnd", desc: "AND condition for refs" },
    { name: "logicNot", desc: "NOT condition for ref" },
    { name: "logicOr", desc: "OR conditions for refs" },
    {
      name: "makeDestructurable",
      desc: "make isomorphic destructurable for object and array at the same time",
    },
    {
      name: "reactify",
      desc: "converts plain functions into reactive functions",
    },
    { name: "reactifyObject", desc: "apply reactify to an object" },
    { name: "reactiveComputed", desc: "computed reactive object" },
    {
      name: "reactiveOmit",
      desc: "reactively omit fields from a reactive object",
    },
    {
      name: "reactivePick",
      desc: "reactively pick fields from a reactive object",
    },
    {
      name: "refAutoReset",
      desc: "a ref which will be reset to the default value after some time",
    },
    { name: "refDebounced", desc: "debounce execution of a ref value" },
    { name: "refDefault", desc: "apply default value to a ref" },
    { name: "refThrottled", desc: "throttle changing of a ref value" },
    {
      name: "refWithControl",
      desc: "fine-grained controls over ref and its reactivity",
    },
    { name: "set", desc: "shorthand for ref.value = x" },
    { name: "syncRef", desc: "two-way refs synchronization" },
    { name: "syncRefs", desc: "keep target refs in sync with a source ref" },
    { name: "toReactive", desc: "converts ref to reactive" },
    {
      name: "toRefs",
      desc: "extended toRefs that also accepts refs of an object",
    },
    {
      name: "useAsyncQueue",
      desc: "executes each asynchronous task sequentially and passed the current task result to the next task",
    },
    { name: "useBase64", desc: "reactive base64 transforming" },
    { name: "useCached", desc: "cache a ref with a custom comparator" },
    {
      name: "useClamp",
      desc: "reactively clamp a value between two other values",
    },
    {
      name: "useConfirmDialog",
      desc: "creates event hooks to support modals and confirmation dialog chains",
    },
    { name: "useCounter", desc: "basic counter with utility functions" },
    { name: "useCycleList", desc: "cycle through a list of items" },
    {
      name: "useDateFormat",
      desc: "get the formatted date according to the string of tokens passed in",
    },
    { name: "useDebounceFn", desc: "debounce execution of a function" },
    { name: "useEventBus", desc: "a basic event bus" },
    {
      name: "useLastChanged",
      desc: "records the timestamp of the last change",
    },
    {
      name: "useMemoize",
      desc: "cache results of functions depending on arguments and keep it reactive",
    },
    { name: "useOffsetPagination", desc: "reactive offset pagination" },
    { name: "useThrottleFn", desc: "throttle execution of a function" },
    { name: "useTimeoutPoll", desc: "use timeout to poll something" },
    { name: "useToggle", desc: "a boolean switcher with utility functions" },
  ],
  Misc: [
    { name: "useTimeAgo", desc: "reactive time ago" },
    {
      name: "useWebWorker",
      desc: "simple Web Workers registration and communication",
    },
    {
      name: "useWebWorkerFn",
      desc: "run expensive functions without blocking the UI",
    },
  ],
  "@Electron": [
    { name: "useIpcRenderer", desc: "provides ipcRenderer and it's all APIs" },
    {
      name: "useIpcRendererInvoke",
      desc: "reactive ipcRenderer.invoke API result",
    },
    {
      name: "useIpcRendererOn",
      desc: "use ipcRenderer.on with ease and ipcRenderer.removeListener automatically on unmounted",
    },
    { name: "useZoomFactor", desc: "reactive WebFrame zoom factor" },
    { name: "useZoomLevel", desc: "reactive WebFrame zoom level" },
  ],
  "@Firebase": [
    { name: "useAuth", desc: "reactive Firebase Auth binding" },
    { name: "useFirestore", desc: "reactive Firestore binding" },
    { name: "useRTDB", desc: "reactive Firebase Realtime Database binding" },
  ],
  "@Head": [
    { name: "createHead", desc: "create the head manager instance." },
    { name: "useHead", desc: "update head meta tags reactively." },
  ],
  "@Integrations": [
    { name: "useAsyncValidator", desc: "wrapper for async-validator" },
    { name: "useAxios", desc: "wrapper for axios" },
    { name: "useChangeCase", desc: "wrapper for change-case" },
    { name: "useCookies", desc: "wrapper for universal-cookie" },
    { name: "useDrauu", desc: "reactive instance for drauu" },
    { name: "useFocusTrap", desc: "reactive wrapper for focus-trap" },
    {
      name: "useFuse",
      desc: "easily implement fuzzy search using a composable on top of the zero-dependency library Fuse.js",
    },
    { name: "useJwt", desc: "wrapper for jwt-decode" },
    { name: "useNProgress", desc: "reactive wrapper for nprogress" },
    { name: "useQRCode", desc: "wrapper for qrcode" },
  ],
  "@Motion": [
    {
      name: "useElementStyle",
      desc: "sync a reactive object to a target element CSS styling",
    },
    {
      name: "useElementTransform",
      desc: "sync a reactive object to a target element CSS transform.",
    },
    { name: "useMotion", desc: "putting your components in motion." },
    {
      name: "useMotionProperties",
      desc: "access Motion Properties for a target element.",
    },
    {
      name: "useMotionVariants",
      desc: "handle the Variants state and selection.",
    },
    { name: "useSpring", desc: "spring animations." },
  ],
  "@Router": [
    { name: "useRouteHash", desc: "shorthand for reactive route.hash" },
    { name: "useRouteQuery", desc: "shorthand for reactive route.query" },
  ],
  "@RxJS": [
    { name: "from", desc: "/ fromEvent" },
    {
      name: "toObserver",
      desc: "sugar function to convert a ref in an observer",
    },
    { name: "useObservable", desc: "use an Observable" },
    {
      name: "useSubject",
      desc: "bind Subject to ref and propagate value changes both ways",
    },
    {
      name: "useSubscription",
      desc: "uses subscriptions without worry about unsubscribing to it or memory leaks",
    },
  ],
  "@SchemaOrg": [
    {
      name: "createSchemaOrg",
      desc: "create the schema.org manager instance.",
    },
    { name: "useSchemaOrg", desc: "update schema.org reactively." },
  ],
  "@Sound": [{ name: "useSound", desc: "play sound effects reactively." }],
};

export default apis;
