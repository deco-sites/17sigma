
interface LogoAnimateProps{
  start:boolean;
  durationStart?:string;
  durationEnd?:string;
}
export function LogoAnimate({start,durationStart='.5s',durationEnd=".3s"}:LogoAnimateProps) 
{
  return (
    <div className='loading-logo-animate'>

      { start && <svg width="363" height="272" viewBox="0 0 363 272" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <defs id="one-open">
            <linearGradient id="one-open-1" x1="50%" y1="100%">
              <stop offset="0" stop-color="#548CFF">
                <animate id="open1" begin="0s;open1.end+2s" dur={durationStart} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1'calcMode="spline"
              keySplines=" 0.185,0.675,0,0.995" />
              </stop>
              <stop offset="0" stop-color="#1f1f26">
                <animate id="open2" begin="0s;open2.end+2s" dur={durationStart} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
              keySplines=" 0.185,0.675,0,0.995" />
              </stop> 
            </linearGradient>
            <linearGradient id="one-open-2" x1="0%" y1="100%">
              <stop offset="0" stop-color="#FFF">
                <animate id="open3" begin="0s;open3.end+2s" dur={durationStart} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
              keySplines=" 0.185,0.675,0,0.995"/>
              </stop>
              <stop offset="0" stop-color="#1f1f26">
                <animate id="open4" begin="0s;open4.end+2s" dur={durationStart} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
              keySplines=" 0.185,0.675,0,0.995"/>
              </stop>
            </linearGradient>
            <linearGradient id="one-open-3" x1="100%" y1="100%">
              <stop offset="0" stop-color="#548CFF">
                <animate id="open4" begin="0s;open4.end+2s" dur={durationStart} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
              keySplines=" 0.185,0.675,0,0.995"  />
              </stop>
              <stop offset="0" stop-color="#1f1f26">
                <animate id="open5" begin="0s;open5.end+2s" dur={durationStart} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
              keySplines=" 0.185,0.675,0,0.995" />
              </stop>
            </linearGradient>
          </defs>
          <defs id="six-open">
          <linearGradient id="six-open-1" x1="100%" y1="100%">
            <stop offset="0" stop-color="#1f1f26">
              <animate id="open6" begin="0s;open6.end+2s" dur={durationStart} attributeName="offset" fill="freeze" from="1" to="0" repeatCount='1' calcMode="spline"
            keySplines=" 0.185,0.675,0,0.995"/>
            </stop>
            <stop offset="0" stop-color="#FFF">
              <animate id="open7" begin="0s;open7.end+2s" dur={durationStart} attributeName="offset" fill="freeze" from="1" to="0" repeatCount='1' calcMode="spline"
            keySplines=" 0.185,0.675,0,0.995"/>
            </stop>
          </linearGradient>
          <linearGradient id="six-open-2" x1="0%" y1="100%">
            <stop offset="0" stop-color="#548CFF">
              <animate id="open8" begin="0s;open8.end+2s" dur={durationStart} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
            keySplines=" 0.185,0.675,0,0.995"/>
            </stop>
            <stop offset="0" stop-color="#1f1f26">
              <animate id="open9" begin="0s;open9.end+2s" dur={durationStart} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
            keySplines=" 0.185,0.675,0,0.995"/>
            </stop>
          </linearGradient>
        </defs>
          <defs id="seven-open">
          <linearGradient id="seven-open-1" x1="65%" y1="100%">
            <stop offset="0" stop-color="#548CFF">
              <animate dur={durationStart} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
            keySplines=" 0.185,0.675,0,0.995" />
            </stop>
            <stop offset="0" stop-color="#1f1f26">
              <animate dur={durationStart} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
            keySplines=" 0.185,0.675,0,0.995"/>
            </stop>
          </linearGradient>
          <linearGradient id="seven-open-2" x1="0%" y1="100%">
            <stop offset="0" stop-color="#FFF">
              <animate dur={durationStart} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
            keySplines=" 0.185,0.675,0,0.995" />
            </stop>
            <stop offset="0" stop-color="#1f1f26">
              <animate dur={durationStart} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
            keySplines=" 0.185,0.675,0,0.995"/>
            </stop>
          </linearGradient>
          <linearGradient id="seven-open-3" x1="100%" y1="100%">
            <stop offset="0" stop-color="#548CFF">
              <animate dur={durationStart} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
            keySplines=" 0.185,0.675,0,0.995" />
            </stop>
            <stop offset="0" stop-color="#1f1f26"> 
              <animate dur={durationStart} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
            keySplines=" 0.185,0.675,0,0.995"/>
            </stop>
          </linearGradient>
        </defs>
        </g>
        <g id="loading-start" >
          <path class="sigma-logo-loading sigma-one-1 loading-open" d="M32 31.5L63.5 50L32 104.5L0.5 86L32 31.5Z" stroke-width="1" opacity="1" />
          <path class="sigma-logo-loading sigma-one-2  loading-open" d="M63.5 14L95 32L63.5 50L32 31.5L63.5 14Z" />
          <path class="sigma-logo-loading sigma-seven-1  loading-open" d="M95 73L127 91V127.046L94.5 109L95 73Z" />
          <path class="sigma-logo-loading sigma-seven-2 loading-open" d="M221 0.5L252.5 18.5L127 91L95 73L221 0.5Z" />
          <path class="sigma-logo-loading sigma-six-1 loading-open" d="M335.001 54.3867L362.501 70.3867C362.501 70.3867 340.752 82.8798 317.5 96.5C306.302 103.059 295 109 285.001 115.5C273.463 123 263 133.5 253.5 148.5C246.398 159.714 241.794 164.94 237.501 177.5C234.191 187.18 232.593 192.77 232.5 203C232.371 217.327 242.5 239 242.5 239C242.5 239 223.625 231.449 216 222.5C211.461 217.172 209.952 215.056 207.5 208.5C202.37 194.783 203.925 183.318 207 169C210.156 154.306 214.213 148.027 222.5 135.5C227.262 128.301 231.624 123.322 237.501 117C243.716 110.313 247.938 107.285 255.001 101.5C283.05 78.5265 335.001 54.3867 335.001 54.3867Z" />
          <path class="sigma-logo-loading sigma-one-3 loading-open" d="M32 104.5L64 86V231.5L32 213.5V104.5Z" />
          <path class="sigma-logo-loading sigma-seven-3 loading-open" d="M165.5 105L220 73.5L126.5 272L95 254.5L165.5 105Z" />
          <path class="sigma-logo-loading sigma-six-2 loading-open" d="M296 135.5C296 135.5 306.985 131.44 312.5 133.5C318.197 135.628 320.395 140.5 321.5 144C324.5 153.5 322.368 163 321 169.5C318.254 182.543 313.888 190.566 305 200.5C296.5 210 279.5 220.5 268.5 215C260.346 210.923 257.5 199 257.5 199C257.5 199 278.167 185.869 286 173C293.881 160.053 296 135.5 296 135.5Z"/>
        </g>  
      </svg>
      }

      { !start &&  <svg width="363" height="272" viewBox="0 0 363 272" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <defs id="one-close">
              <linearGradient id="one-close-1" x1="50%" y1="100%">
                <stop offset="0" stop-color="#1f1f26">
                  <animate id="close1" begin="0s;close1.end+2s"  dur={durationEnd} attributeName="offset" fill="freeze" from="0" to="1"   
                  repeatCount='1' calcMode="spline"
                  keySplines=" 0.185,0.675,0,0.995" />
                </stop>
                <stop offset="0" stop-color="#548CFF">
                  <animate id="close2" begin="0s;close2.end+2s"  dur={durationEnd} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
                keySplines=" 0.185,0.675,0,0.995" />
                </stop>
              </linearGradient>
              <linearGradient id="one-close-2" x1="0%" y1="100%">
                <stop offset="0" stop-color="#1f1f26">
                  <animate dur={durationEnd} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
                keySplines=" 0.185,0.675,0,0.995"/>
                </stop>
                <stop offset="0" stop-color="#FFF">
                  <animate dur={durationEnd} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
                keySplines=" 0.185,0.675,0,0.995"/>
                </stop>
              </linearGradient>
              <linearGradient id="one-close-3" x1="100%" y1="100%">
            <stop offset="0" stop-color="#1f1f26">
              <animate dur={durationEnd} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
            keySplines=" 0.185,0.675,0,0.995" />
            </stop>
            <stop offset="0" stop-color="#548CFF">
              <animate dur={durationEnd} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
            keySplines=" 0.185,0.675,0,0.995"/>
            </stop>
          </linearGradient>
            </defs>
            <defs id="seven-close">
              <linearGradient id="seven-close-1" x1="65%" y1="100%">
                <stop offset="0" stop-color="#1f1f26">
                  <animate dur={durationEnd} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
                keySplines=" 0.185,0.675,0,0.995" />
                </stop>
                <stop offset="0" stop-color="#548CFF">
                  <animate dur={durationEnd} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
                keySplines=" 0.185,0.675,0,0.995"/>
                </stop>
              </linearGradient>
              <linearGradient id="seven-close-2" x1="0%" y1="100%">
                <stop offset="0" stop-color="#1f1f26">
                  <animate dur={durationEnd} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
                keySplines=" 0.185,0.675,0,0.995" />
                </stop>
                <stop offset="0" stop-color="#FFF">
                  <animate dur={durationEnd} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
                keySplines=" 0.185,0.675,0,0.995"/>
                </stop>
              </linearGradient>
              <linearGradient id="seven-close-3" x1="100%" y1="100%">
            <stop offset="0" stop-color="#1f1f26">
              <animate dur={durationEnd} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
            keySplines=" 0.185,0.675,0,0.995" />
            </stop>
            <stop offset="0" stop-color="#548CFF"> 
              <animate dur={durationEnd} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
            keySplines=" 0.185,0.675,0,0.995"/>
            </stop>
          </linearGradient>
            </defs>
            <defs id="six-close">
              <linearGradient id="six-close-1" x1="100%" y1="100%">
            <stop offset="0" stop-color="#FFF">
              <animate dur={durationEnd} attributeName="offset" fill="freeze" from="1" to="0" repeatCount='1' calcMode="spline"
            keySplines=" 0.185,0.675,0,0.995"/>
            </stop>
            <stop offset="0" stop-color="#1f1f26">
              <animate dur={durationEnd} attributeName="offset" fill="freeze" from="1" to="0" repeatCount='1' calcMode="spline"
            keySplines=" 0.185,0.675,0,0.995"/>
            </stop>
          </linearGradient>
              <linearGradient id="six-close-2" x1="100%" y1="100%">
            <stop offset="0" stop-color="#1f1f26">
              <animate dur={durationEnd} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
            keySplines=" 0.185,0.675,0,0.995"/>
            </stop>
            <stop offset="0" stop-color="#548CFF">
              <animate dur={durationEnd} attributeName="offset" fill="freeze" from="0" to="1" repeatCount='1' calcMode="spline"
            keySplines=" 0.185,0.675,0,0.995"/>
            </stop>
          </linearGradient>
            </defs>
          </g>
          <g id="loading-end">
            <path class="sigma-logo-loading sigma-one-1 loading-close" d="M32 31.5L63.5 50L32 104.5L0.5 86L32 31.5Z" stroke-width="1" opacity="1" />
            <path class="sigma-logo-loading sigma-one-2  loading-close" d="M63.5 14L95 32L63.5 50L32 31.5L63.5 14Z" />
            <path class="sigma-logo-loading sigma-seven-1  loading-close" d="M95 73L127 91V127.046L94.5 109L95 73Z" />
            <path class="sigma-logo-loading sigma-seven-2 loading-close" d="M221 0.5L252.5 18.5L127 91L95 73L221 0.5Z" />
            <path class="sigma-logo-loading sigma-six-1 loading-close" d="M335.001 54.3867L362.501 70.3867C362.501 70.3867 340.752 82.8798 317.5 96.5C306.302 103.059 295 109 285.001 115.5C273.463 123 263 133.5 253.5 148.5C246.398 159.714 241.794 164.94 237.501 177.5C234.191 187.18 232.593 192.77 232.5 203C232.371 217.327 242.5 239 242.5 239C242.5 239 223.625 231.449 216 222.5C211.461 217.172 209.952 215.056 207.5 208.5C202.37 194.783 203.925 183.318 207 169C210.156 154.306 214.213 148.027 222.5 135.5C227.262 128.301 231.624 123.322 237.501 117C243.716 110.313 247.938 107.285 255.001 101.5C283.05 78.5265 335.001 54.3867 335.001 54.3867Z" />
            <path class="sigma-logo-loading sigma-one-3 loading-close" d="M32 104.5L64 86V231.5L32 213.5V104.5Z" />
            <path class="sigma-logo-loading sigma-seven-3 loading-close" d="M165.5 105L220 73.5L126.5 272L95 254.5L165.5 105Z" />
            <path class="sigma-logo-loading sigma-six-2 loading-close" d="M296 135.5C296 135.5 306.985 131.44 312.5 133.5C318.197 135.628 320.395 140.5 321.5 144C324.5 153.5 322.368 163 321 169.5C318.254 182.543 313.888 190.566 305 200.5C296.5 210 279.5 220.5 268.5 215C260.346 210.923 257.5 199 257.5 199C257.5 199 278.167 185.869 286 173C293.881 160.053 296 135.5 296 135.5Z"/>
          </g>
        </svg>
      }
     
    </div>
  )
}
