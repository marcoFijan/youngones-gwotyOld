import React from 'react'

export const GoBack = () => {
  const returnToPage = () => {
    window.history.back()
  }
  return (
    <button onClick={returnToPage} className="flex-shrink-0">
      <svg
        width="52"
        height="33"
        viewBox="0 0 52 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 opacity-50 hover:opacity-100 flex-shrink-0"
        id="goBackButton"
      >
        <path d="M2.964 22.616H0.052V20.9H7.982V22.616H5.07V30H2.964V22.616ZM15.1122 26.529C15.1122 26.555 15.0992 26.737 15.0732 27.075H9.7822C9.87753 27.5083 10.1029 27.8507 10.4582 28.102C10.8135 28.3533 11.2555 28.479 11.7842 28.479C12.1482 28.479 12.4689 28.427 12.7462 28.323C13.0322 28.2103 13.2965 28.037 13.5392 27.803L14.6182 28.973C13.9595 29.727 12.9975 30.104 11.7322 30.104C10.9435 30.104 10.2459 29.9523 9.6392 29.649C9.03253 29.337 8.56453 28.908 8.2352 28.362C7.90586 27.816 7.7412 27.1963 7.7412 26.503C7.7412 25.8183 7.90153 25.203 8.2222 24.657C8.55153 24.1023 8.99786 23.6733 9.5612 23.37C10.1332 23.058 10.7702 22.902 11.4722 22.902C12.1569 22.902 12.7765 23.0493 13.3312 23.344C13.8859 23.6387 14.3192 24.0633 14.6312 24.618C14.9519 25.164 15.1122 25.801 15.1122 26.529ZM11.4852 24.436C11.0259 24.436 10.6402 24.566 10.3282 24.826C10.0162 25.086 9.82553 25.4413 9.7562 25.892H13.2012C13.1319 25.45 12.9412 25.099 12.6292 24.839C12.3172 24.5703 11.9359 24.436 11.4852 24.436ZM18.3994 23.929C18.642 23.591 18.967 23.3353 19.3744 23.162C19.7904 22.9887 20.267 22.902 20.8044 22.902V24.774C20.579 24.7567 20.4274 24.748 20.3494 24.748C19.7687 24.748 19.3137 24.9127 18.9844 25.242C18.655 25.5627 18.4904 26.048 18.4904 26.698V30H16.4624V23.006H18.3994V23.929ZM29.107 23.006V30H27.183V29.168C26.9143 29.4713 26.5937 29.7053 26.221 29.87C25.8483 30.026 25.4453 30.104 25.012 30.104C24.0933 30.104 23.3653 29.8397 22.828 29.311C22.2907 28.7823 22.022 27.998 22.022 26.958V23.006H24.05V26.659C24.05 27.7857 24.5223 28.349 25.467 28.349C25.9523 28.349 26.3423 28.193 26.637 27.881C26.9317 27.5603 27.079 27.088 27.079 26.464V23.006H29.107ZM38.2008 23.006V28.83C38.2008 30.1127 37.8671 31.066 37.1998 31.69C36.5325 32.314 35.5575 32.626 34.2748 32.626C33.5988 32.626 32.9575 32.5437 32.3508 32.379C31.7441 32.2143 31.2415 31.976 30.8428 31.664L31.6488 30.208C31.9435 30.4507 32.3161 30.6413 32.7668 30.78C33.2175 30.9273 33.6681 31.001 34.1188 31.001C34.8208 31.001 35.3365 30.8407 35.6658 30.52C36.0038 30.208 36.1728 29.7313 36.1728 29.09V28.791C35.6441 29.3717 34.9075 29.662 33.9628 29.662C33.3215 29.662 32.7321 29.5233 32.1948 29.246C31.6661 28.96 31.2458 28.5613 30.9338 28.05C30.6218 27.5387 30.4658 26.9493 30.4658 26.282C30.4658 25.6147 30.6218 25.0253 30.9338 24.514C31.2458 24.0027 31.6661 23.6083 32.1948 23.331C32.7321 23.045 33.3215 22.902 33.9628 22.902C34.9768 22.902 35.7481 23.2357 36.2768 23.903V23.006H38.2008ZM34.3658 27.998C34.9031 27.998 35.3408 27.842 35.6788 27.53C36.0255 27.2093 36.1988 26.7933 36.1988 26.282C36.1988 25.7707 36.0255 25.359 35.6788 25.047C35.3408 24.7263 34.9031 24.566 34.3658 24.566C33.8285 24.566 33.3865 24.7263 33.0398 25.047C32.6931 25.359 32.5198 25.7707 32.5198 26.282C32.5198 26.7933 32.6931 27.2093 33.0398 27.53C33.3865 27.842 33.8285 27.998 34.3658 27.998Z" />
        <path
          d="M40.5518 22.8922V28C46.5922 28 51.506 23.086 51.506 17.0456C51.506 11.0056 46.5922 6.0916 40.5518 6.0916H36.5304L39.01 3.61201L35.3984 0L26.7529 8.64539L35.3983 17.2905L39.0099 13.6788L36.5304 11.1993H40.5518C43.7756 11.1993 46.3982 13.8219 46.3982 17.0456C46.3982 20.2692 43.7756 22.8922 40.5518 22.8922Z"
          fill="#0db19e"
        />
      </svg>

      {/* <img src="../icons/goBack.svg" alt="goBackButton" className="h-6 opacity-50 hover:opacity-100 flex-shrink-0" /> */}
    </button>
  )
}