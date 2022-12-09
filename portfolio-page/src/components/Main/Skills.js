import React from 'react'
import PropTypes from 'prop-types'
import '../../scss/skills.scss'

function Skills(props) {
  return (
    <div className='skills'>
      <div className='skills__body'>
        <h2>SKILLS</h2> 
        <div className='skills__icons'>
          {/* C# */}
          <svg viewBox="0 0 128 128" width='100'>
            <path d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zm-53.5 70c-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8zM115 62h-3.2l-.9 4h4.1v5h-5l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6H94v-5h3.5l.9-4H94v-5h5.3l1.2-6h4.9l-1.2 6h3.8l1.2-6h4.8l-1.2 6h2.2v5zm-12.7 4h3.8l.9-4h-3.8z" fill="#68217A"></path>
          </svg>
          {/* .NET */}
          <svg viewBox="0 0 128 128" width='100'>
            <path fill="#1384C8" d="M40.335 78.188H38.65v-9.65c0-.762.05-1.69.14-2.785h-.038c-.158.64-.303 1.104-.43 1.391L33.42 78.188h-.821l-4.911-10.964c-.138-.306-.283-.799-.43-1.471h-.036c.052.576.081 1.509.081 2.804v9.631h-1.626V63.817h2.225l4.409 10.021c.332.754.547 1.328.651 1.72h.069a32.45 32.45 0 01.688-1.762l4.505-9.979h2.11v14.371h.001zm5.188 0h-1.639V67.925h1.639v10.263zm.283-13.942c0 .303-.106.555-.317.763a1.04 1.04 0 01-.764.312 1.06 1.06 0 01-.757-.301 1.025 1.025 0 01-.313-.774c0-.296.104-.549.313-.754s.464-.305.757-.305c.3 0 .557.099.764.305.211.205.317.458.317.754M55.764 77.713c-.786.483-1.726.722-2.812.722-1.472 0-2.655-.488-3.561-1.464-.879-.947-1.321-2.169-1.321-3.667 0-1.681.48-3.042 1.45-4.077.964-1.036 2.261-1.553 3.892-1.553.892 0 1.683.174 2.375.521v1.687c-.766-.538-1.576-.805-2.445-.805-1.045 0-1.896.365-2.555 1.093-.687.745-1.034 1.742-1.034 2.985 0 1.194.317 2.14.948 2.837.633.694 1.476 1.042 2.538 1.042.897 0 1.738-.295 2.524-.882v1.561h.001zm7.84-8.123c-.289-.223-.706-.331-1.255-.331-.668 0-1.229.298-1.683.901-.516.673-.771 1.604-.771 2.795v5.232h-1.644V67.925h1.644v2.116h.039c.241-.749.614-1.325 1.112-1.733a2.456 2.456 0 011.572-.561c.438 0 .762.047.984.14l.002 1.703zm9.154 3.485c0-1.313-.296-2.317-.89-3.006-.575-.662-1.38-.992-2.416-.992-1.021 0-1.841.334-2.453 1.003-.647.715-.971 1.725-.971 3.035 0 1.228.308 2.192.93 2.879.618.692 1.45 1.039 2.494 1.039 1.08 0 1.907-.352 2.474-1.051.555-.684.832-1.652.832-2.907m1.685-.057c0 1.635-.462 2.949-1.382 3.934-.924.989-2.167 1.483-3.73 1.483-1.54 0-2.767-.494-3.665-1.483-.881-.953-1.323-2.211-1.323-3.776 0-1.786.5-3.162 1.503-4.139.929-.906 2.17-1.363 3.726-1.363 1.53 0 2.726.477 3.587 1.422.853.95 1.284 2.258 1.284 3.922m8.146 2.424c0 .84-.313 1.536-.942 2.091-.687.601-1.63.901-2.816.901-.971 0-1.822-.203-2.545-.618V76.05c.804.654 1.692.983 2.667.983 1.301 0 1.952-.479 1.952-1.434a1.27 1.27 0 00-.431-.991c-.289-.262-.851-.576-1.685-.943-.859-.376-1.472-.762-1.833-1.163-.434-.476-.652-1.093-.652-1.854 0-.852.341-1.561 1.014-2.125.675-.567 1.542-.85 2.606-.85.815 0 1.546.159 2.194.481v1.654c-.677-.488-1.451-.732-2.329-.732-.544 0-.981.136-1.307.399-.329.27-.494.614-.494 1.034 0 .455.138.808.412 1.061.244.233.761.519 1.541.852.876.367 1.509.748 1.895 1.137.5.494.753 1.121.753 1.883m10.04-2.367c0-1.313-.297-2.317-.892-3.006-.575-.662-1.381-.992-2.415-.992-1.021 0-1.841.334-2.456 1.003-.646.715-.969 1.725-.969 3.035 0 1.228.309 2.192.924 2.879.626.692 1.459 1.039 2.501 1.039 1.082 0 1.906-.352 2.474-1.051.555-.684.833-1.652.833-2.907m1.688-.057c0 1.635-.466 2.949-1.388 3.934-.92.989-2.163 1.483-3.727 1.483-1.542 0-2.768-.494-3.667-1.483-.881-.953-1.323-2.211-1.323-3.776 0-1.786.504-3.162 1.502-4.139.928-.906 2.171-1.363 3.728-1.363 1.531 0 2.725.477 3.584 1.422.855.95 1.291 2.258 1.291 3.922M101.555 64.438a2.2 2.2 0 00-1.091-.27c-1.15 0-1.721.724-1.721 2.175v1.582h2.405v1.392h-2.405v8.871h-1.645v-8.871h-1.745v-1.392h1.745v-1.664c0-1.129.346-2.016 1.05-2.654.603-.555 1.34-.831 2.217-.831.508 0 .902.061 1.189.178v1.484zm6.484 13.647c-.388.222-.904.333-1.543.333-1.791 0-2.687-1.01-2.687-3.029v-6.07h-1.761v-1.394h1.761v-2.504l1.646-.533v3.037h2.583v1.394h-2.583v5.791c0 .688.112 1.18.348 1.465.237.295.625.439 1.173.439.409 0 .763-.109 1.063-.331v1.402zm-88.802 40.157c0 .805-.286 1.5-.867 2.087a2.845 2.845 0 01-2.102.88 2.736 2.736 0 01-2.05-.88 2.915 2.915 0 01-.841-2.087c0-.827.279-1.525.841-2.103a2.742 2.742 0 012.05-.867c.823 0 1.524.292 2.102.878.581.588.867 1.286.867 2.092M56.018 120.606H50.66L31.212 90.572a13.803 13.803 0 01-1.179-2.365h-.16c.139.804.209 2.531.209 5.175v27.224h-4.416v-37.68h5.732l18.865 29.56c.751 1.173 1.265 2.013 1.525 2.519h.104c-.175-1.083-.266-2.932-.266-5.54V82.926h4.39v37.68h.002zm28.314 0H64.361v-37.68h19.104v3.993h-14.69v12.534h13.612v3.995H68.774v13.164h15.558v3.994zm30.291-33.687h-10.854v33.688h-4.415V86.919H88.479v-3.995h26.144v3.995z"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#1384C8" d="M82.108 46.33c.479-1.232 1.022-2.445 1.427-3.701 2.288-7.097 4.554-14.2 6.805-21.309.865-2.731 1.813-5.42 3.515-7.767 2.692-3.709 6.442-5.652 10.88-6.331a37.456 37.456 0 015.28-.406c5.267-.05 10.536-.015 15.804-.01.28 0 .56.029.957.052-.129.304-.199.525-.311.724-1.955 3.494-3.872 7.009-5.885 10.468-3.505 6.022-7.016 12.042-10.631 17.998-2.319 3.819-4.834 7.52-7.687 10.974-2.105 2.548-4.321 4.984-7.146 6.77-1.925 1.217-3.981 1.929-6.315 1.917-8.278-.045-16.556-.012-24.834-.024-2.461-.004-4.568-.941-6.356-2.603-2.563-2.381-4.093-5.412-5.345-8.608-2.284-5.835-3.563-11.951-5.031-18.014-.688-2.838-1.47-5.654-2.215-8.478-.048-.183-.142-.354-.25-.617l-.577.542c-3.228 3.207-6.071 6.741-8.615 10.498-.693 1.024-.926 2.374-1.313 3.591-1.424 4.47-2.722 8.983-4.264 13.411-1.477 4.242-4.125 7.616-8.264 9.61a18.565 18.565 0 01-7.689 1.855c-3.98.088-7.962.098-11.943.134-.952.009-.996-.069-.748-.99 1.707-6.338 3.87-12.514 6.58-18.492 2.794-6.167 6.085-12.048 10.231-17.419 2.823-3.657 5.941-7.031 9.843-9.582 1.979-1.293 4.083-2.315 6.477-2.584.394-.045.793-.073 1.189-.073 8.478-.004 16.956.082 25.433-.039 4.547-.065 7.839 1.855 10.304 5.515 1.533 2.276 2.63 4.761 3.553 7.328 1.861 5.178 3.018 10.547 4.325 15.878.748 3.051 1.581 6.081 2.379 9.12.06.228.157.446.238.668l.199-.006z"></path>
          </svg>
          {/* JS */}
          <svg viewBox="0 0 128 128" width='100'>
            <path fill="#F0DB4F" d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
          </svg>
          {/* React */}
          <svg viewBox="0 0 128 128" width='100'>
            <g fill="#61DAFB"><circle cx="64" cy="47.5" r="9.3"></circle><path d="M64 81.7C71.3 88.8 78.5 93 84.3 93c1.9 0 3.7-.4 5.2-1.3 5.2-3 7.1-10.5 5.3-21.2-.3-1.9-.7-3.8-1.2-5.8 2-.6 3.8-1.2 5.6-1.8 10.1-3.9 15.7-9.3 15.7-15.2 0-6-5.6-11.4-15.7-15.2-1.8-.7-3.6-1.3-5.6-1.8.5-2 .9-3.9 1.2-5.8 1.7-10.9-.2-18.5-5.4-21.5-1.5-.9-3.3-1.3-5.2-1.3-5.7 0-13 4.2-20.3 11.3C56.7 6.3 49.5 2.1 43.7 2.1c-1.9 0-3.7.4-5.2 1.3-5.2 3-7.1 10.5-5.3 21.2.3 1.9.7 3.8 1.2 5.8-2 .6-3.8 1.2-5.6 1.8-10.1 3.9-15.7 9.3-15.7 15.2 0 6 5.6 11.4 15.7 15.2 1.8.7 3.6 1.3 5.6 1.8-.5 2-.9 3.9-1.2 5.8-1.7 10.7.2 18.3 5.3 21.2 1.5.9 3.3 1.3 5.2 1.3 5.8.2 13-4 20.3-11zm-5.6-13.5c1.8.1 3.7.1 5.6.1 1.9 0 3.8 0 5.6-.1-1.8 2.4-3.7 4.6-5.6 6.7-1.9-2.1-3.8-4.3-5.6-6.7zM46 57.9c1 1.7 1.9 3.3 3 4.9-3.1-.4-6-.9-8.8-1.5.9-2.7 1.9-5.5 3.1-8.3.8 1.6 1.7 3.3 2.7 4.9zm-5.8-24.1c2.8-.6 5.7-1.1 8.8-1.5-1 1.6-2 3.2-3 4.9-1 1.7-1.9 3.3-2.7 5-1.3-2.9-2.3-5.7-3.1-8.4zm5.5 13.7c1.3-2.7 2.7-5.4 4.3-8.1 1.5-2.6 3.2-5.2 4.9-7.8 3-.2 6-.3 9.1-.3 3.2 0 6.2.1 9.1.3 1.8 2.6 3.4 5.2 4.9 7.8 1.6 2.7 3 5.4 4.3 8.1-1.3 2.7-2.7 5.4-4.3 8.1-1.5 2.6-3.2 5.2-4.9 7.8-3 .2-6 .3-9.1.3-3.2 0-6.2-.1-9.1-.3-1.8-2.6-3.4-5.2-4.9-7.8-1.6-2.7-3-5.4-4.3-8.1zm39.1-5.4l-2.7-5c-1-1.7-1.9-3.3-3-4.9 3.1.4 6 .9 8.8 1.5-.9 2.8-1.9 5.6-3.1 8.4zm0 10.8c1.2 2.8 2.2 5.6 3.1 8.3-2.8.6-5.7 1.1-8.8 1.5 1-1.6 2-3.2 3-4.9.9-1.5 1.8-3.2 2.7-4.9zm2.3 34.7c-.8.5-1.8.7-2.9.7-4.9 0-11-4-17-10 2.9-3.1 5.7-6.6 8.5-10.5 4.7-.4 9.2-1.1 13.4-2.1.5 1.8.8 3.6 1.1 5.4 1.4 8.5.3 14.6-3.1 16.5zm5.2-52.7c11.2 3.2 17.9 8.1 17.9 12.6 0 3.9-4.6 7.8-12.7 10.9-1.6.6-3.4 1.2-5.2 1.7-1.3-4.1-2.9-8.3-4.9-12.6 2-4.3 3.7-8.5 4.9-12.6zm-8-28.2c1.1 0 2 .2 2.9.7 3.3 1.9 4.5 7.9 3.1 16.5-.3 1.7-.7 3.5-1.1 5.4-4.2-.9-8.7-1.6-13.4-2.1-2.7-3.9-5.6-7.4-8.5-10.5 6-5.9 12.1-10 17-10zM69.6 26.8c-1.8-.1-3.7-.1-5.6-.1s-3.8 0-5.6.1c1.8-2.4 3.7-4.6 5.6-6.7 1.9 2.1 3.8 4.4 5.6 6.7zM40.9 7.4c.8-.5 1.8-.7 2.9-.7 4.9 0 11 4 17 10-2.9 3.1-5.7 6.6-8.5 10.5-4.7.4-9.2 1.1-13.4 2.1-.5-1.8-.8-3.6-1.1-5.4-1.4-8.5-.3-14.5 3.1-16.5zm-5.2 52.7C24.5 56.9 17.8 52 17.8 47.5c0-3.9 4.6-7.8 12.7-10.9 1.6-.6 3.4-1.2 5.2-1.7 1.3 4.1 2.9 8.3 4.9 12.6-2 4.3-3.7 8.6-4.9 12.6zm2.1 11c.3-1.7.7-3.5 1.1-5.4 4.2.9 8.7 1.6 13.4 2.1 2.7 3.9 5.6 7.4 8.5 10.5-6 5.9-12.1 10-17 10-1.1 0-2-.2-2.9-.7-3.4-1.9-4.5-8-3.1-16.5zm-4.2 41.2c2.2-2.7 2.3-5.7 1.1-8.7-1.2-3-3.7-4.4-6.8-4.5-3.7-.1-7.5 0-11.2 0H16V125h3v-9.8h4.7c.6 0 1.1.2 1.4.7l6 9.3c.1.2.4.5.6.5h3.9c-2.4-3.7-4.7-7.2-7.1-10.8 2.1-.3 3.9-1 5.1-2.6zm-14.6-.2v-9.9h1.1c2.3 0 4.7-.1 7 .1 2.7.1 4.6 2.2 4.6 4.9s-2.2 4.8-4.9 4.9c-2.4.1-4.8 0-7.8 0zm38.7 1.3c-1.6-7-8-8.8-12.9-6.6-3.8 1.7-5.5 5-5.6 9.1-.1 3.1.8 5.9 3.2 8 2.7 2.4 6 2.7 9.4 2.1 1.9-.4 3.6-1.3 4.9-2.7-.5-.7-1-1.4-1.5-2-2.8 2.4-5.9 3.2-9.3 1.6-2.2-1.1-3.3-3.8-3.5-5.8h15.5v-1.3c.1-.9 0-1.7-.2-2.4zM42.6 115c-.3-3 2.7-6.2 6-6.2 3.8-.1 6.2 2.2 6.3 6.2H42.6zm30.7-8.7c-1.5-.3-3.1-.4-4.6-.3-2.4.2-4.5 1.3-6.2 3.1.5.7.9 1.4 1.5 2.2.2-.2.4-.4.6-.5 1.6-1.5 3.5-2.3 5.8-2.1 1.8.1 3.5.7 4 2.5.4 1.4.3 2.9.4 4.4-.3 0-.4-.1-.5-.2-2.4-2-5.1-2.4-8-1.7-2.7.7-4.4 2.8-4.6 5.5-.2 3.1 1.2 5.4 3.9 6.5 1.7.7 3.6.7 5.4.3 1.4-.3 2-1.1 4-2.2v1.3h2.8c0-4 .1-8.9 0-13.5 0-2.9-1.7-4.7-4.5-5.3zm1.4 12.6c-.1.3 0 .6 0 .9 0 2.1-.5 2.8-2.5 3.6-1.4.5-2.9.7-4.4.2-1.7-.5-2.9-2-2.9-3.7-.1-1.7 1-3.4 2.7-3.9 2.3-.8 4.4-.3 6.3 1.1.6.5 1 1 .8 1.8zm15.6-9.9c2.6-.8 5-.3 6.8 1.9l.3.2c.7-.6 1.3-1.2 2.1-1.9-.3-.3-.4-.5-.6-.8-2.9-3.1-8.6-3.5-12.1-1-4.9 3.6-4.8 10.6-2.4 14.3 2.3 3.5 5.6 4.7 9.5 4.2 2.3-.3 4.2-1.4 5.7-3.3-.7-.6-1.4-1.2-2.1-1.9-.2.2-.3.3-.4.5-2.7 3-7.2 2.7-9.6-.5-1.4-1.9-1.7-4.1-1.3-6.3.2-2.5 1.5-4.5 4.1-5.4zm20.8 13.6c-.2.1-.3.2-.3.2-.8.6-1.6.7-2.5.4-.9-.4-1-1.2-1.1-2v-11.4c0-.2 0 .2.1-.8h3.8v-3h-4v-5h-3v5.4h-2.6c-.2 0-.5.2-.5.4-.1.7 0 1.2 0 2.2h3.2v12.8c0 1.6.4 3 1.8 3.8 1.5.9 4.4.7 5.7-.4.2-.1.3-.5.3-.6-.3-.6-.6-1.3-.9-2z"></path></g>
          </svg>
          {/* jQuery */}
          <svg viewBox="0 0 128 128" width='100'>
            <path fill="#0868AC" d="M47.961 79.02l.193.094.344.166c.439.209.882.416 1.329.615l.281.125c.513.225 1.029.439 1.551.645l.378.148c.482.188.972.37 1.463.543l.184.063c.539.188 1.083.363 1.632.534l.395.117c.558.169 1.109.37 1.685.477 36.554 6.665 47.171-21.967 47.171-21.967-8.918 11.618-24.747 14.683-39.745 11.271-.568-.128-1.12-.306-1.674-.47l-.417-.126a51.381 51.381 0 01-1.612-.524l-.221-.08a51.147 51.147 0 01-1.421-.527l-.398-.156a43.031 43.031 0 01-1.534-.638l-.307-.136a61.098 61.098 0 01-1.294-.602l-.375-.18c-.336-.164-.669-.339-1.001-.51l-.668-.35a37.935 37.935 0 01-1.199-.673l-.405-.226a58.779 58.779 0 01-1.563-.958l-.421-.28a41.205 41.205 0 01-1.112-.739l-.358-.252c-.354-.25-.704-.503-1.051-.76l-.466-.353a47.401 47.401 0 01-.948-.74l-.423-.34a62.157 62.157 0 01-1.182-.995l-.129-.109A49.53 49.53 0 0143.399 60l-.35-.337c-.303-.287-.6-.577-.893-.874l-.35-.35a49.681 49.681 0 01-1.095-1.158l-.054-.058a44.217 44.217 0 01-1.111-1.264l-.291-.346c-.27-.325-.538-.655-.799-.988l-.293-.364a53.218 53.218 0 01-.923-1.229c-8.326-11.358-11.318-27.023-4.663-39.888l-5.899 7.482c-7.559 10.863-6.617 24.997-.844 36.541l.423.821.271.52.168.299.301.539c.179.316.362.63.55.944l.315.519c.208.336.421.668.64 1l.272.422c.301.448.609.896.926 1.336l.027.035.156.211c.275.379.558.753.844 1.123l.318.404c.255.321.516.641.78.959l.298.355c.355.419.717.835 1.087 1.242l.022.023.042.046c.36.394.73.778 1.104 1.164l.354.357c.29.292.584.579.882.865l.361.343c.397.374.798.741 1.208 1.101l.02.015.21.18c.361.312.729.623 1.099.928l.455.362c.302.242.608.481.916.716l.489.372c.34.25.682.496 1.027.737l.375.266.103.073c.328.226.663.442.998.659l.432.288c.513.325 1.035.646 1.562.956l.432.244c.388.223.777.442 1.172.656l.648.336.84.437zm3.693-36.795c.819 1.174 1.726 2.57 2.813 3.514.394.434.806.856 1.226 1.273l.324.318c.409.396.824.785 1.252 1.164l.052.044.012.013c.475.416.965.816 1.463 1.21l.333.26c.5.383 1.009.759 1.531 1.118l.045.033.698.46.332.22c.373.238.75.472 1.135.694l.16.093c.331.191.667.379 1.003.561l.356.187.702.363.106.048c.482.237.968.465 1.464.682l.323.133c.396.168.797.333 1.199.487l.514.188c.366.136.732.26 1.102.383l.499.16c.526.163 1.045.369 1.593.46 28.222 4.677 34.738-17.054 34.738-17.054-5.874 8.459-17.248 12.494-29.386 9.344a33.73 33.73 0 01-1.598-.462l-.481-.155c-.375-.121-.748-.25-1.118-.385l-.504-.188a39.777 39.777 0 01-1.204-.485l-.324-.138a32.331 32.331 0 01-1.472-.685l-.739-.376-.426-.219c-.314-.17-.626-.348-.934-.527l-.223-.127a35.907 35.907 0 01-1.132-.689l-.341-.229-.732-.484a37.97 37.97 0 01-1.525-1.115l-.343-.271c-5.313-4.193-9.524-9.927-11.527-16.428-2.098-6.74-1.646-14.308 1.989-20.449l-4.466 6.306c-5.466 7.865-5.169 18.396-.905 26.715a34.709 34.709 0 002.416 4.035zm29.747-9.731l.701.243.309.098c.333.104.662.226 1.005.29 15.583 3.011 19.811-7.997 20.936-9.617-3.703 5.331-9.925 6.61-17.56 4.757a19.346 19.346 0 01-1.848-.57 22.91 22.91 0 01-2.193-.91 22.678 22.678 0 01-3.846-2.347c-6.832-5.185-11.076-15.072-6.618-23.126l-2.412 3.324c-3.222 4.743-3.539 10.633-1.303 15.869 2.358 5.56 7.19 9.92 12.829 11.989zM66.359 96.295h-4.226a.556.556 0 00-.517.417l-1.5 6.94-1.5 6.94a.554.554 0 01-.516.417h-2.991c-2.959 0-2.617-2.047-2.011-4.851l.018-.085.066-.354.012-.066.135-.72.145-.771.154-.785.682-3.332.683-3.332a.336.336 0 00-.341-.419h-4.337a.55.55 0 00-.514.418l-.933 4.424-.932 4.425-.002.006-.086.412c-1.074 4.903-.79 9.58 5.048 9.727l.17.003h9.163a.554.554 0 00.516-.417l1.976-9.289 1.976-9.29c.049-.23-.103-.417-.338-.418zm-45.256-.049h-4.64a.562.562 0 00-.521.416l-.44 1.942-.44 1.942c-.051.229.098.416.333.416h4.676a.556.556 0 00.518-.417l.425-1.941.425-1.941c.049-.229-.101-.417-.336-.417zm-1.346 6.044H15.08a.563.563 0 00-.521.416l-.657 2.91-.656 2.909-.183.834-.631 2.97-.63 2.971c-.049.229-.15.599-.225.821 0 0-.874 2.6-2.343 2.57l-.184-.004-1.271-.023h-.001a.558.558 0 00-.524.407l-.485 2.039-.484 2.038c-.055.228.093.416.326.42.833.01 2.699.031 3.828.031 3.669 0 5.604-2.033 6.843-7.883l1.451-6.714 1.361-6.297c.049-.227-.103-.415-.337-.415zm86.117-1.574l-.194-.801-.191-.82-.097-.414c-.38-1.477-1.495-2.328-3.917-2.328l-3.77-.004-3.472-.005h-3.907a.552.552 0 00-.515.417l-.173.816-.204.964-.057.271-1.759 8.24-1.67 7.822c-.05.23-.066.512-.038.626.028.115.479.209.713.209h3.524c.235 0 .532-.042.66-.094s.317-.513.364-.742l.626-3.099.627-3.1.001-.005.084-.413.76-3.56.671-3.144a.555.555 0 01.515-.417l11.089-.005c.235.002.383-.185.33-.414zm14.275-7.24l-.854.003h-3.549a.904.904 0 00-.667.353l-7.849 11.498c-.132.194-.283.166-.335-.062l-.578-2.533a.562.562 0 00-.522-.416h-5.045c-.235 0-.374.184-.31.409l2.261 7.921c.064.226.069.596.011.824l-.985 3.833c-.059.228.085.413.32.413h4.987a.58.58 0 00.532-.413l.986-3.833a2.52 2.52 0 01.363-.755l12.742-16.911c.142-.188.065-.341-.169-.339l-1.339.008zm-40.086 9.919v-.004a.514.514 0 01-.499.441h-6.397c-.222 0-.334-.15-.301-.336l.006-.015-.004.002.003-.021.029-.109c.611-1.624 1.855-2.69 4.194-2.69 2.634-.001 3.148 1.285 2.969 2.732zm-1.877-7.384c-8.211 0-10.157 4.984-11.249 10.015-1.091 5.128-.998 9.921 7.5 9.921h1.03l.256-.001h.06l1.02-.003h.018c2.244-.009 4.495-.026 5.406-.033a.553.553 0 00.509-.42l.344-1.681.067-.327.41-2.006a.335.335 0 00-.341-.418h-7.639c-3.039 0-3.941-.807-3.608-3.181H84.18l-.001.001.008-.001a.503.503 0 00.445-.315l.029-.106-.001.001c1.813-6.839 1.293-11.445-6.474-11.446zm-38.81 7.358l-.116.409v.001l-.922 3.268-.922 3.267a.596.596 0 01-.543.411h-4.88c-3.702 0-4.604-2.896-3.702-7.166.901-4.368 2.668-7.083 6.312-7.358 4.98-.376 5.976 3.126 4.773 7.168zm3.348 7.105s2.301-5.588 2.823-8.814c.713-4.319-1.45-10.585-9.804-10.585-8.306 0-11.914 5.981-13.29 12.484-1.376 6.55.427 12.293 8.686 12.246l6.516-.024 6.089-.022a.59.59 0 00.534-.414l1.061-4.046c.059-.228-.084-.414-.319-.416l-1.017-.006-1.017-.006c-.199-.001-.313-.131-.289-.302l.027-.095zm41.12-3.741a.28.28 0 11-.56.001.28.28 0 01.56-.001z"></path>
          </svg>
          {/* HTML5 */}
          <svg viewBox="0 0 128 128" width='100'>
            <path fill="#E44D26" d="M19.569 27l8.087 89.919 36.289 9.682 36.39-9.499L108.431 27H19.569zM91.61 47.471l-.507 5.834L90.88 56H48.311l1.017 12h40.54l-.271 2.231-2.615 28.909-.192 1.69L64 106.964v-.005l-.027.012-22.777-5.916L39.65 84h11.168l.791 8.46 12.385 3.139.006-.234v.012l12.412-2.649L77.708 79H39.153l-2.734-30.836L36.152 45h55.724l-.266 2.471zM27.956 1.627h5.622v5.556h5.144V1.627h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623V1.627zm23.782 5.579h-4.95V1.627h15.525v5.579h-4.952v11.243h-5.623V7.206zm13.039-5.579h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502V1.627zm21.736 0h5.624v11.262h7.907v5.561H86.513V1.627z"></path>
          </svg>
          {/* CSS3 */}
          <svg viewBox="0 0 128 128" width='100'>
            <path fill="#1572B6" d="M19.67 26l8.069 90.493 36.206 10.05 36.307-10.063L108.33 26H19.67zm69.21 50.488L86.53 98.38l.009 1.875L64 106.55v.001l-.018.015-22.719-6.225L39.726 83h11.141l.79 8.766 12.347 3.295-.004.015v-.032l12.394-3.495L77.702 77H51.795l-.222-2.355-.506-5.647L50.802 66h27.886l1.014-11H37.229l-.223-2.589-.506-6.03L36.235 43h55.597l-.267 3.334-2.685 30.154M89 14.374L81.851 6H89V1H73v4.363L81.39 13H73v5h16zm-19 0L63.193 6H70V1H55v4.363L62.733 13H55v5h15zM52 13h-8V6h8V1H38v17h14z"></path>
          </svg>
          {/* Bootstrap */}
          <svg viewBox="0 0 128 128" width='100'>
          <path d="M27.235 2.051c-7.177 0-12.486 6.284-12.249 13.099.228 6.546-.068 15.026-2.203 21.94-2.14 6.936-5.76 11.319-11.673 11.883v6.387c5.913.563 9.533 4.947 11.673 11.883 2.135 6.914 2.43 15.394 2.203 21.94-.238 6.815 5.072 13.098 12.249 13.098h73.54c7.177 0 12.486-6.284 12.249-13.098-.228-6.546.068-15.026 2.202-21.94 2.14-6.935 5.751-11.319 11.664-11.883v-6.387c-5.913-.563-9.523-4.947-11.664-11.883-2.134-6.914-2.43-15.394-2.202-21.94.237-6.815-5.072-13.099-12.25-13.099zm58.114 61.686c0 9.384-7.002 15.073-18.621 15.073H45.306a.491.491 0 01-.491-.491V25.993a.491.491 0 01.491-.492h21.309c9.689 0 16.047 5.246 16.047 13.3 0 5.653-4.277 10.713-9.727 11.6v.296c7.418.813 12.414 5.948 12.414 13.04zM64.571 32.262H53.293v15.922h9.5c7.342 0 11.391-2.955 11.391-8.238 0-4.95-3.481-7.684-9.613-7.684zm-11.278 22.24V72.05h11.695c7.645 0 11.695-3.066 11.695-8.83 0-5.763-4.163-8.718-12.187-8.718z" fill="#7952b3"></path><g fill="#7952b3" aria-label="Bootstrap"><path d="M11.398 121.43v-17.738h5.047q2.3 0 3.649 1.126 1.348 1.125 1.348 2.931 0 1.51-.816 2.623-.817 1.113-2.252 1.583v.05q1.794.21 2.87 1.36 1.076 1.138 1.076 2.969 0 2.276-1.632 3.686-1.633 1.41-4.12 1.41zm2.078-15.858v5.727h2.128q1.707 0 2.684-.816.977-.83.977-2.326 0-2.585-3.402-2.585zm0 7.595v6.383h2.82q1.831 0 2.833-.866 1.014-.866 1.014-2.375 0-3.142-4.28-3.142zM30.942 121.73q-2.808 0-4.49-1.769-1.67-1.781-1.67-4.713 0-3.191 1.744-4.985 1.744-1.793 4.713-1.793 2.832 0 4.416 1.744 1.595 1.744 1.595 4.836 0 3.031-1.719 4.862-1.707 1.818-4.589 1.818zm.148-11.553q-1.954 0-3.092 1.336-1.138 1.323-1.138 3.661 0 2.252 1.15 3.55 1.15 1.3 3.08 1.3 1.967 0 3.019-1.275 1.063-1.274 1.063-3.624 0-2.375-1.063-3.662-1.052-1.286-3.019-1.286zM45.786 121.73q-2.808 0-4.49-1.769-1.67-1.781-1.67-4.713 0-3.191 1.744-4.985 1.744-1.793 4.713-1.793 2.832 0 4.416 1.744 1.596 1.744 1.596 4.836 0 3.031-1.72 4.862-1.707 1.818-4.589 1.818zm.148-11.553q-1.954 0-3.092 1.336-1.138 1.323-1.138 3.661 0 2.252 1.15 3.55 1.15 1.3 3.08 1.3 1.967 0 3.019-1.275 1.063-1.274 1.063-3.624 0-2.375-1.063-3.662-1.052-1.286-3.019-1.286zM61.211 121.31q-.717.396-1.893.396-3.327 0-3.327-3.711v-7.496h-2.177v-1.732h2.177v-3.092l2.029-.656v3.748h3.191v1.732H58.02v7.137q0 1.274.433 1.819.432.544 1.434.544.767 0 1.324-.42zM63.153 120.97v-2.177q1.657 1.224 3.649 1.224 2.672 0 2.672-1.78 0-.508-.235-.854-.223-.359-.619-.631-.383-.272-.915-.482-.52-.223-1.126-.458-.84-.334-1.484-.668-.63-.346-1.064-.767-.42-.433-.643-.977-.21-.544-.21-1.274 0-.89.408-1.571.408-.693 1.088-1.15.68-.47 1.547-.706.878-.235 1.806-.235 1.645 0 2.944.57v2.053q-1.398-.916-3.217-.916-.569 0-1.026.136-.458.124-.792.36-.322.234-.507.568-.173.322-.173.718 0 .494.173.828.185.334.532.594.346.26.841.47.495.21 1.126.458.84.321 1.509.668.668.334 1.138.767.47.42.717.977.26.556.26 1.323 0 .94-.42 1.633-.409.693-1.102 1.15-.692.458-1.595.681-.903.223-1.893.223-1.954 0-3.39-.755zM80.544 121.31q-.717.396-1.893.396-3.327 0-3.327-3.711v-7.496h-2.177v-1.732h2.177v-3.092l2.029-.656v3.748h3.191v1.732h-3.191v7.137q0 1.274.433 1.819.432.544 1.434.544.767 0 1.324-.42zM89.859 110.82q-.532-.408-1.534-.408-1.299 0-2.177 1.224-.866 1.225-.866 3.34v6.457h-2.028v-12.666h2.028v2.61h.05q.433-1.336 1.323-2.078.89-.755 1.992-.755.791 0 1.212.174zM101.13 121.43h-2.029v-1.98h-.05q-1.323 2.277-3.895 2.277-1.893 0-2.97-1.002-1.063-1.002-1.063-2.66 0-3.55 4.18-4.13l3.798-.533q0-3.228-2.61-3.228-2.288 0-4.131 1.558v-2.078q1.868-1.187 4.305-1.187 4.465 0 4.465 4.725zm-2.029-6.407l-3.055.42q-1.41.198-2.128.705-.717.495-.717 1.769 0 .928.656 1.522.668.58 1.769.58 1.509 0 2.486-1.05.99-1.064.99-2.685zM107.03 119.6h-.05v7.657h-2.028v-18.493h2.029v2.226h.049q1.497-2.523 4.379-2.523 2.449 0 3.822 1.707 1.373 1.694 1.373 4.552 0 3.179-1.546 5.096-1.546 1.905-4.23 1.905-2.462 0-3.798-2.128zm-.05-5.109v1.77q0 1.57 1.015 2.671 1.027 1.089 2.597 1.089 1.844 0 2.883-1.41 1.05-1.41 1.05-3.922 0-2.115-.976-3.315-.977-1.2-2.647-1.2-1.77 0-2.845 1.237-1.077 1.225-1.077 3.08z"></path></g>
          </svg>
          {/* Docker */}
          <svg viewBox="0 0 128 128" width='100'>
            <path d="M86 118.4c0-.3.1-.6 0-.9-.2-.3-.3-.5-.5-.7-.5-.6-1-1.1-1.6-1.7l-5.9-6 4.6-4.7 2.5-2.7c.4-.4.9-1.2.9-1.8v-.4c0-.9-.4-1.4-1.3-1.6l.2.1h-.7c-.6 0-2.3 1.6-2.7 2.1-1.5 1.5-2.5 2.9-4.5 4.4V92.6c0-1.1-.6-1.6-1.7-1.6H75c-1.1 0-2 .5-2 1.6v25.9c0 1.1.9 1.5 2 1.5h.3c1.1 0 1.7-.5 1.7-1.5v-4.6l3 2.9c.9.9 1.8 1.5 2.6 2.3.4.4 1.2.9 1.8.9h.3c1 0 1.3-.5 1.5-1.3l-.2.1v-.4zM125.1 98h-.4c-2.2 0-4.2.6-6 1.9-3 2.2-4.7 5.1-4.7 8.9v9.8c0 1.1.4 1.4 1.5 1.4h.3c1.1 0 2.2-.4 2.2-1.4v-9.2c0-2 .4-3.9 1.9-5.4 1.2-1.2 2.7-2.2 4.4-2.2 1.3 0 2.8-.3 2.8-1.9 0-1.2-.9-1.9-2-1.9zm-15.4 5c-1.1-1.8-2.6-3.2-4.5-4.1-3.5-1.7-7.2-1.9-10.6.1l-.5.3c-1.4.8-2.6 1.8-3.5 3.1-2.6 3.8-2.9 8.1-.6 12.1l.2.4c1 1.7 2.3 3.1 4 4 3.6 2 7.5 2.2 11.1.2l.3-.2c1-.6 1.2-1.6.7-2.6-.2-.4-.6-.7-1-.9h-.2c-.7-.1-2.6.7-3.3 1-1.4.2-3 .3-4.4-.2l7.6-6.6c1.1-1 2.3-2.1 3.5-3 1-.8 2-1.9 1.2-3.3v-.3zm-6.9 3.6l-8.5 7.3c-.3-.3-.5-.7-.7-1-.6-1-1-2.2-1-3.4-.1-3 1-5.5 3.7-7 2-1.2 4.2-1.4 6.4-.6 1.1.4 2.4 1.1 3.1 2.1-1 .9-2.1 1.7-3 2.6zM22 91h-.3c-1.1 0-1.7.4-1.7 1.5v8.1c-2-1.8-4.4-2.5-7.2-2.5H12c-1.9 0-3.7.3-5.4 1.3-3.6 2.1-5.6 5.2-5.6 9.4v.8c0 1.9.5 3.5 1.5 5.2 2.1 3.6 5.4 5.4 9.5 5.4h.8c1.9 0 3.9-.3 5.5-1.2 3.6-2.1 5.7-5.2 5.7-9.3v-17c0-1.3-.9-1.7-2-1.7zm-3.1 21.8c-1.5 2.5-3.7 3.9-6.6 3.9-1.2 0-2.4-.3-3.4-.9-2.6-1.4-4.1-3.7-4.1-6.7 0-1.1.2-2.1.7-3.1 1.4-2.9 3.7-4.5 6.9-4.5 1.6 0 3 .5 4.2 1.4 2.1 1.5 3.3 3.5 3.3 6.1.1 1.4-.3 2.6-1 3.8zM37.6 98H37c-1.9 0-3.8.3-5.4 1.3-3.6 2.1-5.6 5.2-5.6 9.4v.8c0 1.9.5 3.5 1.5 5.2 2.1 3.6 5.4 5.4 9.6 5.4h.8c1.9 0 3.8-.3 5.5-1.2 3.6-2.1 5.7-5.2 5.7-9.3v-.8c0-1.8-.6-3.3-1.4-4.8-2.2-4-5.7-6-10.1-6zm6.4 14.8c-1.5 2.4-3.6 3.9-6.5 3.9-1.3 0-2.6-.3-3.8-1-2.5-1.5-3.9-3.6-3.9-6.5 0-1.1.2-2.1.7-3.1 1.4-2.9 3.7-4.5 6.9-4.5 1.5 0 2.8.4 4 1.2 2.2 1.5 3.5 3.6 3.5 6.3.1 1.2-.2 2.5-.9 3.7zm24.5-13.4l-.1.1c-1.7-1.1-3.6-1.5-5.6-1.5H62c-1.9 0-3.8.3-5.4 1.3-3.6 2.1-5.6 5.2-5.6 9.3v.8c0 1 .2 1.9.4 2.9 1.6 5.5 5.9 8.6 11.7 8.2 1.6-.1 5.9-.6 5.9-3v-.4c0-.9-.7-1.7-1.5-1.9l-.1-.2h-.7l-.2.3c-.9.4-2.4 1.2-3.4 1.2-1.2 0-2.5 0-3.6-.6-2.9-1.4-4.6-3.7-4.6-6.9 0-1.1.2-2.1.7-3.1 1.4-2.8 3.7-4.6 6.9-4.5.6 0 1.7.3 2.3.6.5.2 1.8 1 2.4 1h.2l.1-.2c.9-.2 1.6-.9 1.6-1.8v-.4c0-.4-.2-.7-.4-1l-.2-.2zM5.8 68.2l.1.2c7.9 13.4 21.7 19 36.8 19 29.2 0 53.3-13.1 64.3-40.6 7.4.4 15-1.8 18.6-8.9l.9-1.8-1.8-1c-4.3-2.5-10-2.8-14.8-1.4-.6-5.2-4-9.7-8-12.9l-1.6-1.3-1.3 1.6c-2.7 3.1-3.5 8.3-3.1 12.3.3 2.9 1.2 5.9 3 8.3-1.4.8-2.9 1.9-4.3 2.4-2.8 1-5.9 2-8.9 2H79V32H66V7H51v12H26v13H13v14H1.8l-.2 1.5c-.5 6.4.3 12.6 3 18.5l1.2 2.2zM66 35h11v11H66V35zM53 9h11v11H53V9zm0 13h11v11H53V22zm0 13h11v11H53V35zM40 22h11v11H40V22zm0 13h11v11H40V35zm1.1 31.2c0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7.1 3.1 1.4 3.1 3.1zM28 22h10v11H28V22zm0 13h10v11H28V35zm-13 0h11v11H15V35zm2.4 38c1.6 0 3.2 0 4.7-.1 3.9-.2 7.3-.7 10.1-1.5 2.3 5.3 6.5 10.2 14 13.8l-3.5.1c-15.8-.1-24.3-5.4-31.3-12.4 2.1.1 4.1.1 6 .1zM38 68.4c1.2 0 2.2-1 2.2-2.2 0-.3-.1-.6-.2-.8-.2.3-.4.5-.8.5-.5 0-.9-.4-.9-.9 0-.3.2-.6.4-.8-.1-.1-.4-.2-.7-.2-1.2 0-2.2 1-2.2 2.2.1 1.2 1 2.2 2.2 2.2z" fill="#019BC6"></path>
          </svg>
          {/* Jest */}
          <svg viewBox="0 0 128 128" width='100'>
            <path fill="#99425B" d="M124.129 63.02c0-7.692-5.828-14.165-13.652-16.012L128 .113H41.16l17.563 47.043c-7.578 1.996-13.164 8.356-13.164 15.903 0 5.546 3.058 10.464 7.703 13.496-1.832 2.367-3.953 4.55-6.356 6.62-4.523 3.848-9.539 6.805-14.957 8.766-4.89-2.996-7.008-8.285-5.094-13.02 7.457-2.07 12.88-8.394 12.88-15.827 0-9.133-8.192-16.532-18.22-16.532-10.066 0-18.253 7.434-18.253 16.57 0 4.513 2.035 8.653 5.297 11.61-.286.52-.57 1.035-.856 1.59C4.973 81.438 1.875 87.207.691 93.68c-2.363 12.941 1.508 23.336 10.84 29.215 5.258 3.293 11.047 4.957 17.282 4.957 10.714 0 21.597-4.883 32.109-9.618 7.5-3.363 15.242-6.879 22.863-8.578 2.813-.629 5.746-1 8.844-1.406 6.273-.813 12.754-1.664 18.582-4.734 6.805-3.586 11.45-9.579 12.797-16.457 1.015-5.29 0-10.614-2.61-15.274a15.35 15.35 0 002.73-8.765zm-7.945 0c0 5.14-4.606 9.32-10.27 9.32s-10.27-4.18-10.27-9.32c0-1.665.489-3.254 1.344-4.622.325-.52.735-1.035 1.14-1.48a8.517 8.517 0 011.427-1.219l.043-.039c.324-.222.691-.445 1.058-.664 0 0 .04 0 .04-.039.163-.074.327-.184.492-.258.039 0 .078-.039.12-.039.165-.07.368-.144.57-.219a8.78 8.78 0 00.571-.222c.04 0 .082-.04.121-.04.164-.034.328-.109.489-.144.043 0 .125-.039.164-.039.203-.035.367-.074.57-.11h.043l.61-.113c.042 0 .12 0 .163-.035.164 0 .325-.039.489-.039h.203c.203 0 .41-.035.652-.035h.531c.16 0 .286 0 .446.035h.082c.328.04.652.074.98.149 4.645.886 8.192 4.66 8.192 9.172zM52.527 7.508h64.102l-14.711 39.387c-.61.113-1.223.296-1.832.48l-15.484-28.66L69.074 47.19c-.613-.183-1.265-.296-1.914-.406zM81.664 59.8c-.773-3.477-2.73-6.582-5.5-8.875l8.438-15.457 8.515 15.789c-2.527 2.293-4.36 5.215-5.094 8.543zM61.25 53.96c.203-.04.367-.074.57-.113h.121c.164-.035.329-.035.489-.075h.164c.164 0 .285-.035.449-.035h1.59c.16 0 .285.035.406.035.082 0 .121 0 .203.04.164.035.285.035.45.074.038 0 .081 0 .163.035.204.039.407.074.57.113h.04c.164.035.328.07.488.145.043 0 .082.039.164.039.121.035.285.074.406.148.043 0 .082.035.125.035.16.075.325.114.489.188h.039c.203.07.367.144.531.258h.04c.163.074.327.183.491.257.04 0 .04.04.078.04.164.07.286.183.45.257l.043.035c.488.333.937.704 1.382 1.075l.043.035c.407.406.813.851 1.141 1.332 1.059 1.48 1.672 3.219 1.672 5.105 0 5.141-4.606 9.317-10.27 9.317s-10.27-4.176-10.27-9.317c-.042-4.328 3.259-7.988 7.743-9.023zm-40.102-.262c5.665 0 10.27 4.18 10.27 9.32 0 5.141-4.605 9.32-10.27 9.32-5.664 0-10.27-4.179-10.27-9.32 0-5.14 4.606-9.32 10.27-9.32zm94.79 32.067c-.895 4.73-4.118 8.875-8.844 11.351-4.442 2.332-9.903 3.07-15.649 3.809-3.136.406-6.437.851-9.617 1.554-8.476 1.887-16.625 5.586-24.531 9.133-10.106 4.551-19.645 8.84-28.484 8.84-4.606 0-8.723-1.183-12.633-3.66-8.965-5.621-8.52-16.16-7.457-21.93.976-5.402 3.707-10.468 6.316-15.312.16-.297.285-.555.445-.852.899.297 1.836.52 2.813.668-1.547 7.84 2.851 15.938 11.41 19.934l1.55.738 1.669-.555c7.133-2.293 13.734-6.027 19.562-11.02 3.301-2.812 6.114-5.843 8.477-9.136.937.149 1.875.188 2.812.188 8.477 0 15.606-5.29 17.645-12.391h6.844c2.039 7.137 9.171 12.39 17.648 12.39 3.383 0 6.52-.85 9.207-2.292 1.063 2.773 1.387 5.656.817 8.543zm0 0"></path>
          </svg>
          {/* SQL */}
          <svg viewBox="0 0 128 128" width='100'>
            <path fill="#00618A" d="M2.001 90.458h4.108V74.235l6.36 14.143c.75 1.712 1.777 2.317 3.792 2.317s3.003-.605 3.753-2.317l6.36-14.143v16.223h4.108V74.262c0-1.58-.632-2.345-1.936-2.739-3.121-.974-5.215-.131-6.163 1.976l-6.241 13.958-6.043-13.959c-.909-2.106-3.042-2.949-6.163-1.976C2.632 71.917 2 72.681 2 74.261v16.197zm31.898-13.206h4.107v8.938c-.038.485.156 1.625 2.406 1.661 1.148.018 8.862 0 8.934 0V77.208h4.117c.019 0-.004 14.514-.004 14.574.022 3.58-4.441 4.357-6.499 4.417H33.988v-2.764c.022 0 12.963.003 12.995-.001 2.645-.279 2.332-1.593 2.331-2.035v-1.078h-8.731c-4.062-.037-6.65-1.81-6.683-3.85-.002-.187.089-9.129-.001-9.219zM56.63 90.458h11.812c1.383 0 2.727-.289 3.793-.789 1.777-.816 2.646-1.922 2.646-3.372v-3.002c0-1.185-.987-2.292-2.923-3.028-1.027-.396-2.292-.605-3.517-.605h-4.978c-1.659 0-2.449-.5-2.646-1.606-.039-.132-.039-.237-.039-.369v-1.87c0-.105 0-.211.039-.342.197-.843.632-1.08 2.094-1.212l.395-.026h11.733v-2.738H63.504c-1.659 0-2.528.105-3.318.342-2.449.764-3.517 1.975-3.517 4.082v2.396c0 1.844 2.095 3.424 5.61 3.793.396.025.79.053 1.185.053h4.267c.158 0 .316 0 .435.025 1.304.105 1.856.343 2.252.816a.98.98 0 01.315.737v2.397c0 .289-.197.658-.592.974-.355.316-.948.527-1.738.58l-.435.026H56.63v2.738zm43.881-4.766c0 2.817 2.094 4.397 6.32 4.714.395.026.79.052 1.185.052h10.706V87.72h-10.784c-2.41 0-3.318-.606-3.318-2.055V71.497h-4.108v14.195zm-23.008.142v-9.765c0-2.48 1.742-3.985 5.186-4.46a7.8 7.8 0 011.108-.079h7.799c.396 0 .752.026 1.147.079 3.444.475 5.187 1.979 5.187 4.46v9.765c0 2.014-.74 3.09-2.445 3.792l4.048 3.653h-4.771l-3.274-2.956-3.296.209h-4.395a9.075 9.075 0 01-2.414-.343c-2.613-.712-3.88-2.085-3.88-4.355zm4.435-.237c0 .132.039.265.079.423.237 1.135 1.307 1.768 2.929 1.768h3.732l-3.428-3.095h4.771l2.989 2.7c.552-.295.914-.743 1.041-1.32.039-.132.039-.264.039-.396v-9.368c0-.105 0-.238-.039-.37-.238-1.056-1.307-1.662-2.89-1.662h-6.216c-1.82 0-3.008.792-3.008 2.032v9.288zm40.398-18.645c-2.525-.069-4.454.166-6.104.861-.469.198-1.216.203-1.292.79.257.271.297.674.502 1.006.394.637 1.059 1.491 1.652 1.938.647.489 1.315 1.013 2.011 1.437 1.235.754 2.615 1.184 3.806 1.938.701.446 1.397 1.006 2.082 1.509.339.247.565.634 1.006.789v-.071c-.231-.294-.291-.698-.503-1.006l-.934-.934c-.913-1.212-2.071-2.275-3.304-3.159-.982-.705-3.18-1.658-3.59-2.801l-.072-.071c.696-.079 1.512-.331 2.154-.503 1.08-.29 2.045-.215 3.16-.503l1.508-.432v-.286c-.563-.578-.966-1.344-1.58-1.867-1.607-1.369-3.363-2.737-5.17-3.879-1.002-.632-2.241-1.043-3.304-1.579-.356-.181-.984-.274-1.221-.575-.559-.711-.862-1.612-1.293-2.441a93.068 93.068 0 01-2.585-5.458c-.544-1.245-.9-2.473-1.579-3.59-3.261-5.361-6.771-8.597-12.208-11.777-1.157-.677-2.55-.943-4.021-1.292l-2.37-.144c-.481-.201-.983-.791-1.436-1.077-1.802-1.138-6.422-3.613-7.756-.358-.842 2.054 1.26 4.058 2.011 5.099.527.73 1.203 1.548 1.58 2.369.248.54.29 1.081.503 1.652.521 1.406.976 2.937 1.651 4.236.341.658.718 1.351 1.149 1.939.264.36.718.52.789 1.077-.443.62-.469 1.584-.718 2.369-1.122 3.539-.699 7.938.934 10.557.501.805 1.681 2.529 3.303 1.867 1.419-.578 1.103-2.369 1.509-3.95.092-.357.035-.621.215-.861v.072l1.293 2.585c.957 1.541 2.654 3.15 4.093 4.237.746.563 1.334 1.538 2.298 1.867v-.073h-.071c-.188-.291-.479-.411-.719-.646-.562-.551-1.187-1.235-1.651-1.867-1.309-1.776-2.465-3.721-3.519-5.745-.503-.966-.94-2.032-1.364-3.016-.164-.379-.162-.953-.502-1.148-.466.72-1.149 1.303-1.509 2.154-.574 1.36-.648 3.019-.861 4.739l-.144.071c-1.001-.241-1.352-1.271-1.724-2.154-.94-2.233-1.115-5.83-.287-8.401.214-.666 1.181-2.761.789-3.376-.187-.613-.804-.967-1.148-1.437a11.222 11.222 0 01-1.149-2.011c-.77-1.741-1.129-3.696-1.938-5.457-.388-.842-1.042-1.693-1.58-2.441-.595-.83-1.262-1.44-1.724-2.442-.164-.356-.387-.927-.144-1.293.077-.247.188-.35.432-.431.416-.321 1.576.107 2.01.287 1.152.479 2.113.934 3.089 1.58.468.311.941.911 1.508 1.077h.646c1.011.232 2.144.071 3.088.358 1.67.508 3.166 1.297 4.524 2.155 4.139 2.614 7.522 6.334 9.838 10.772.372.715.534 1.396.861 2.154.662 1.528 1.496 3.101 2.154 4.596.657 1.491 1.298 2.996 2.227 4.237.488.652 2.374 1.002 3.231 1.364.601.254 1.585.519 2.154.861 1.087.656 2.141 1.437 3.16 2.155.509.362 2.076 1.149 2.154 1.798zM90.237 39.593a5.124 5.124 0 00-1.293.144v.071h.072c.251.517.694.849 1.005 1.293l.719 1.508.071-.071c.445-.313.648-.814.646-1.58-.179-.188-.205-.423-.359-.646-.204-.3-.602-.468-.861-.719z"></path>
          </svg>
          {/* Node */}
          <svg viewBox="0 0 128 128" width='100'>
            <path fill="#83CD29" d="M112.678 30.334L68.535 4.729c-2.781-1.584-6.424-1.584-9.227 0L14.82 30.334C11.951 31.985 10 35.088 10 38.407v51.142c0 3.319 1.992 6.423 4.862 8.083l11.729 6.688c5.627 2.772 7.186 2.772 9.746 2.772 8.334 0 12.662-5.039 12.662-13.828v-50.49C49 42.061 49.445 41 48.744 41h-5.622C42.41 41 41 42.061 41 42.773v50.49c0 3.896-3.616 7.773-10.202 4.48L18.676 90.73c-.422-.23-.676-.693-.676-1.181V38.407c0-.482.463-.966.891-1.213l44.378-25.561a1.508 1.508 0 011.415 0l43.963 25.555c.421.253.354.722.354 1.219v51.142c0 .488.092.963-.323 1.198l-44.133 25.576c-.378.227-.87.227-1.285 0l-11.317-6.749c-.341-.198-.752-.269-1.08-.086-3.145 1.783-3.729 2.02-6.679 3.043-.727.253-1.799.692.408 1.929l14.798 8.754a9.29 9.29 0 004.647 1.246 9.303 9.303 0 004.666-1.246l43.976-25.582c2.871-1.672 4.322-4.764 4.322-8.083V38.407c-.001-3.319-1.452-6.414-4.323-8.073zM77.727 81.445c-11.727 0-14.309-3.235-15.17-9.066-.102-.628-.634-1.379-1.274-1.379h-5.73c-.709 0-1.28.86-1.28 1.566 0 7.466 4.06 16.512 23.454 16.512 14.038 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.104 0 12.46 1.954 13.841 8.091.119.577.646.991 1.241.991h5.754c.354 0 .691-.143.939-.396.241-.272.367-.613.336-.979-.893-10.569-7.913-15.494-22.112-15.494-12.632 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.956-3.978 7.067-13.308 7.067z"></path>
          </svg>
          {/* Webpack */}
          <svg viewBox="0 0 128 128" width='100'>
            <g fill="#1c78c0"><path d="M117.29 98.1L66.24 127v-22.51L98 87l19.29 11.1zm3.5-3.16V34.55l-18.68 10.8v38.81l18.67 10.77zM10.71 98.1l51 28.88v-22.49L29.94 87zm-3.5-3.16V34.55l18.68 10.8v38.81zm2.19-64.3L61.76 1v21.76L28.21 41.21l-.27.15zm109.18 0L66.24 1v21.76L99.79 41.2l.27.15 18.54-10.71zM61.76 99.37L30.37 82.1V47.92L61.76 66zm4.48 0l31.39-17.25v-34.2L66.24 66zM32.5 44L64 26.66 95.5 44 64 62.16 32.5 44z"></path></g>
          </svg>
        </div>
      </div>
    </div>
  )
}

Skills.propTypes = {}

export default Skills
