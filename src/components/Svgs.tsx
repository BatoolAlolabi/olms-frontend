export const ArrowUpDownSvg = ({ open = false }: { open: boolean }) => {
  return (
    <svg
      className={`w-3 h-3 shrink-0 ml-1 fill-current text-gray-400 dark:text-gray-500 ${
        open && "rotate-180"
      }`}
      viewBox="0 0 12 12"
    >
      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
    </svg>
  );
};
export const DashboardLogoSvg = () => {
  return (
    <svg
      className={`shrink-0 fill-current
          text-gray-400 dark:text-gray-500`}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 16 16"
    >
      <path d="M5.936.278A7.983 7.983 0 0 1 8 0a8 8 0 1 1-8 8c0-.722.104-1.413.278-2.064a1 1 0 1 1 1.932.516A5.99 5.99 0 0 0 2 8a6 6 0 1 0 6-6c-.53 0-1.045.076-1.548.21A1 1 0 1 1 5.936.278Z" />
      <path d="M6.068 7.482A2.003 2.003 0 0 0 8 10a2 2 0 1 0-.518-3.932L3.707 2.293a1 1 0 0 0-1.414 1.414l3.775 3.775Z" />
    </svg>
  );
};
export const SettingLogoSvg = () => {
  return (
    <svg
      className={`shrink-0 fill-current text-gray-400 dark:text-gray-500`}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 16 16"
    >
      <path
        d="M10.5 1a3.502 3.502 0 0 1 3.355 2.5H15a1 1 0 1 1 0 2h-1.145a3.502 3.502 0 0 1-6.71 0H1a1 1 0 0 1 0-2h6.145A3.502 3.502 0 0 1 10.5 1ZM9 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM5.5 9a3.502 3.502 0 0 1 3.355 2.5H15a1 1 0 1 1 0 2H8.855a3.502 3.502 0 0 1-6.71 0H1a1 1 0 1 1 0-2h1.145A3.502 3.502 0 0 1 5.5 9ZM4 12.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"
        fillRule="evenodd"
      />
    </svg>
  );
};
export const UsersLogoSvg = () => {
  return (
    <svg
      className={`shrink-0 fill-current text-gray-400 dark:text-gray-500`}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 1.25C6.37665 1.25 4.25 3.37665 4.25 6C4.25 8.62335 6.37665 10.75 9 10.75C11.6234 10.75 13.75 8.62335 13.75 6C13.75 3.37665 11.6234 1.25 9 1.25ZM5.75 6C5.75 4.20507 7.20507 2.75 9 2.75C10.7949 2.75 12.25 4.20507 12.25 6C12.25 7.79493 10.7949 9.25 9 9.25C7.20507 9.25 5.75 7.79493 5.75 6Z"
      />
      <path d="M15 2.25C14.5858 2.25 14.25 2.58579 14.25 3C14.25 3.41421 14.5858 3.75 15 3.75C16.2426 3.75 17.25 4.75736 17.25 6C17.25 7.24264 16.2426 8.25 15 8.25C14.5858 8.25 14.25 8.58579 14.25 9C14.25 9.41421 14.5858 9.75 15 9.75C17.0711 9.75 18.75 8.07107 18.75 6C18.75 3.92893 17.0711 2.25 15 2.25Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.67815 13.5204C5.07752 12.7208 6.96067 12.25 9 12.25C11.0393 12.25 12.9225 12.7208 14.3219 13.5204C15.7 14.3079 16.75 15.5101 16.75 17C16.75 18.4899 15.7 19.6921 14.3219 20.4796C12.9225 21.2792 11.0393 21.75 9 21.75C6.96067 21.75 5.07752 21.2792 3.67815 20.4796C2.3 19.6921 1.25 18.4899 1.25 17C1.25 15.5101 2.3 14.3079 3.67815 13.5204ZM4.42236 14.8228C3.26701 15.483 2.75 16.2807 2.75 17C2.75 17.7193 3.26701 18.517 4.42236 19.1772C5.55649 19.8253 7.17334 20.25 9 20.25C10.8267 20.25 12.4435 19.8253 13.5776 19.1772C14.733 18.517 15.25 17.7193 15.25 17C15.25 16.2807 14.733 15.483 13.5776 14.8228C12.4435 14.1747 10.8267 13.75 9 13.75C7.17334 13.75 5.55649 14.1747 4.42236 14.8228Z"
      />
      <path d="M18.1607 13.2674C17.7561 13.1787 17.3561 13.4347 17.2674 13.8393C17.1787 14.2439 17.4347 14.6439 17.8393 14.7326C18.6317 14.9064 19.2649 15.2048 19.6829 15.5468C20.1014 15.8892 20.25 16.2237 20.25 16.5C20.25 16.7507 20.1294 17.045 19.7969 17.3539C19.462 17.665 18.9475 17.9524 18.2838 18.1523C17.8871 18.2717 17.6624 18.69 17.7818 19.0867C17.9013 19.4833 18.3196 19.708 18.7162 19.5886C19.5388 19.3409 20.2743 18.9578 20.8178 18.4529C21.3637 17.9457 21.75 17.2786 21.75 16.5C21.75 15.6352 21.2758 14.912 20.6328 14.3859C19.9893 13.8593 19.1225 13.4783 18.1607 13.2674Z" />
    </svg>
  );
};
export const CoursesLogoSvg = () => {
  return (
    <svg
      className={`shrink-0 fill-current text-gray-400 dark:text-gray-500`}
      width="18"
      height="18"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="3"
    >
      <path d="M50.28,23.29V43.94a1.74,1.74,0,0,1-1.74,1.74H11.3a1.74,1.74,0,0,1-1.74-1.74V17.85a1.74,1.74,0,0,1,1.74-1.74H37.07" />
      <line x1="9.56" y1="39.19" x2="50.28" y2="39.19" />
      <path d="M22.23,52.54a5.72,5.72,0,0,0,3-6.86" />
      <path d="M38.38,52.54a5.73,5.73,0,0,1-3.05-6.86" />
      <line x1="17.45" y1="52.54" x2="42.39" y2="52.54" strokeLinecap="round" />
      <circle cx="22.13" cy="25.21" r="3.53" />
      <path d="M29.28,39.19a7.15,7.15,0,0,0-7.15-7.14h0A7.14,7.14,0,0,0,15,39.19Z" />
      <path d="M53.58,23.29h-8.4L40.1,26.88a.09.09,0,0,1-.14-.07l0-3.52H37.93a.87.87,0,0,1-.86-.86V12.32a.86.86,0,0,1,.86-.86H53.58a.86.86,0,0,1,.86.86V22.43A.87.87,0,0,1,53.58,23.29Z" />
    </svg>
  );
};
export const FinanceLogoSvg = () => {
  return (
    <svg
      className={`shrink-0 fill-current text-gray-400 dark:text-gray-500`}
      width="18"
      height="18"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g data-name="2. Coin" id="_2._Coin">
        <path d="M22,9h-.19A2.83,2.83,0,0,0,22,8V6a3,3,0,0,0-3-3H3A3,3,0,0,0,0,6V8a3,3,0,0,0,2.22,2.88A3,3,0,0,0,2,12v2a3,3,0,0,0,.22,1.12A3,3,0,0,0,0,18v2a3,3,0,0,0,2.22,2.88A3,3,0,0,0,2,24v2a3,3,0,0,0,3,3H22A10,10,0,0,0,22,9Zm-9.16,6H5a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H16A10,10,0,0,0,12.84,15ZM2,6A1,1,0,0,1,3,5H19a1,1,0,0,1,1,1V8a1,1,0,0,1-1,1H3A1,1,0,0,1,2,8ZM2,18a1,1,0,0,1,1-1h9.2a10.1,10.1,0,0,0,0,4H3a1,1,0,0,1-1-1Zm3,9a1,1,0,0,1-1-1V24a1,1,0,0,1,1-1h7.84A10,10,0,0,0,16,27Zm17,0a8,8,0,1,1,8-8A8,8,0,0,1,22,27Z" />

        <path d="M22,16h2a1,1,0,0,0,0-2H23a1,1,0,0,0-2,0v.18A3,3,0,0,0,22,20a1,1,0,0,1,0,2H20a1,1,0,0,0,0,2h1a1,1,0,0,0,2,0v-.18A3,3,0,0,0,22,18a1,1,0,0,1,0-2Z" />
      </g>
    </svg>
  );
};
export const StudentsLogoSvg = () => {
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 fill-current text-gray-400 dark:text-gray-500`}
      width="18"
      height="18"
      viewBox="0 0 31.184 31.183"
    >
      <g>
        <g>
          <path
            d="M9.087,15.882c2.505,0,4.534-2.03,4.534-4.538c0-1.566,0.547-2.996-0.659-3.811C12.239,7.042,9.058,6.81,8.117,6.81
			c-1.118,0-2.571,0.911-3.361,1.58c-0.985,0.832-0.208,1.565-0.208,2.954C4.548,13.852,6.576,15.882,9.087,15.882z M5.925,10.9
			c0.832-0.152,1.398,0.123,1.398,0.123l1.394-0.678c0,0-0.708,1.025-0.07,0.678c1.415-0.478,3-0.278,3.809-0.12
			c0.028,0.177,0.053,0.358,0.053,0.547c0,1.867-1.482,3.377-3.32,3.377c-1.834,0-3.318-1.51-3.318-3.377
			C5.869,11.261,5.896,11.079,5.925,10.9z"
          />
          <path
            d="M16.878,16.618c-0.252-2.292,0.843-3.675,1.265-4.118c0.39,2.373,2.438,4.194,4.918,4.194c2.35,0,4.312-1.636,4.847-3.826
			c0.401,0.716,1.084,2.179,0.918,3.75c4.168-0.035,2.114-4.798-0.808-5.321c-0.021-0.243-0.041-0.487-0.095-0.721
			c-0.173-1.506-1.521-4.566-5.381-4.472c-3.332,0.077-4.06,2.583-4.231,4.111c-0.119,0.376-0.193,0.769-0.22,1.175
			C13.753,12.146,14.231,16.544,16.878,16.618z M20.717,10.28c0,0,0.428,0.146,0.428,1.537c0.735,0.258,2.014-2.161,2.014-2.161
			v1.905c0.818,0.221,3.379-0.074,3.379-0.074l0.096,0.083c0.002,0.041,0.012,0.08,0.012,0.122c0,1.979-1.608,3.587-3.584,3.587
			c-1.949,0-3.535-1.567-3.578-3.509C20.193,11.512,20.717,10.28,20.717,10.28z"
          />
          <polygon
            points="24.171,17.351 22.068,17.351 20.307,17.351 16.466,21.977 12.276,16.83 6.279,16.83 0,23.722 1.317,25.081 
			5.813,21.244 5.911,24.24 12.836,24.134 12.855,21.382 15.685,24.29 16.27,25.081 16.355,24.979 16.45,25.075 16.7,24.586 
			20.118,20.672 20.339,22.417 19.65,23.949 26.639,23.832 25.711,22.417 25.884,20.269 28.893,24.301 30.891,23.806 26.117,17.351 
					"
          />
        </g>
      </g>
    </svg>
  );
};
export const TutorssLogoSvg = () => {
  return (
    <svg
      className={`shrink-0 fill-current text-gray-400 dark:text-gray-500`}
      width="18"
      height="18"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.002 512.002"
    >
      <g>
        <g>
          <circle cx="392.353" cy="42.318" r="42.124" />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M499.406,338.088c0-4.626-3.75-8.376-8.376-8.376h-3.545v-18.347c1.476-1.116,2.794-2.423,3.918-3.893
			c2.634-3.446,4.206-7.746,4.183-12.421l-0.751-149.322c-0.131-26.391-21.709-47.859-48.098-47.859h-20.833
			c-2.662,6.956-22.34,58.364-25.196,65.825l5.941-27.984c0.417-1.966,0.115-4.015-0.853-5.775l-8.158-14.837l7.252-13.19
			c1.08-1.964-0.343-4.375-2.588-4.375h-19.905c-2.24,0-3.669,2.408-2.588,4.375l7.252,13.19l-8.188,14.893
			c-0.95,1.727-1.259,3.733-0.875,5.667l5.194,28.037c-2.635-6.759-22.113-58.59-24.936-65.825h-20.637
			c-26.39,0-47.966,21.469-48.099,47.859l-0.75,149.323c-0.057,11.226,8.998,20.371,20.223,20.427c0.034,0,0.07,0,0.105,0
			c11.178,0,20.267-9.033,20.324-20.223l0.75-149.323c0-0.018,0-0.036,0-0.053c0.027-2.158,1.79-3.89,3.948-3.877
			c2.158,0.013,3.9,1.767,3.9,3.926l0.01,341.681c0,13.47,10.92,24.391,24.391,24.391s24.391-10.92,24.391-24.391V292.654h10.531
			v194.955c0,13.47,10.92,24.391,24.391,24.391s24.391-10.92,24.391-24.391v-41.545c-9.727-5.136-16.375-15.352-16.375-27.095
			v-80.881c0-11.744,6.648-21.959,16.375-27.096c0-17.223-0.332-133.71-0.421-164.837c-0.007-2.306,1.828-4.195,4.133-4.255
			c2.305-0.06,4.238,1.729,4.352,4.031c0,0.001,0,0.001,0,0.002l0.751,149.323c0.023,4.611,1.598,8.841,4.201,12.237
			c1.315,1.715,2.883,3.224,4.67,4.445v17.773h-3.436c-4.626,0-8.376,3.75-8.376,8.376v80.881c0,4.626,3.75,8.376,8.376,8.376
			h30.661c4.626,0,8.376-3.75,8.376-8.376v-80.881H499.406z"
          />
        </g>
      </g>
      <g>
        <g>
          <circle cx="147.601" cy="42.141" r="42.141" />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M228.266,326.652l-14.438-74.548l-33.6,21.448c-8.458,5.399-18.895,7.18-29.115,4.347l-28.103,8.151
			c-1.903,0.552-3.868,0.832-5.839,0.832c-9.257,0-17.523-6.213-20.104-15.109l-11.701-40.339l-15.815,81.65
			c7.688,5.569,12.702,14.612,12.702,24.81v2.214c3.401,0,7.183,0,11.275,0v147.493c0,13.475,10.924,24.4,24.4,24.4
			c13.475,0,24.4-10.923,24.4-24.4V340.108c3.508,0,7.027,0,10.535,0v147.493c0,13.475,10.924,24.4,24.4,24.4s24.4-10.923,24.4-24.4
			V340.108c5.883,0,11.137,0,15.516,0C224.267,340.108,229.619,333.638,228.266,326.652z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M89.881,171.841c15.619-4.53,31.144-9.033,47.057-13.649c-1.828-4.688-4.328-11.098-23.582-60.478h-0.987
			c-21.762,0-37.58,13.919-47.014,41.37c-14.619,42.544-47.82,133.38-48.153,134.292c-3.199,8.75,0.002,18.261,7.203,23.455
			c0,17.067,0,14.407,0,32.686h-3.436c-4.626,0-8.376,3.75-8.376,8.377v80.881c0,4.626,3.75,8.376,8.376,8.376h30.659
			c4.626,0,8.376-3.75,8.376-8.376v-80.881c0-4.627-3.75-8.377-8.376-8.377h-3.545c0-11.744,0-20.903,0-32.6
			c3.238-2.301,5.844-5.565,7.311-9.577c0.204-0.557,12.634-34.566,25.658-70.777l-5.448-18.781
			C72.388,186.695,78.793,175.057,89.881,171.841z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M161.315,130.855l-8.158-14.837l7.252-13.19c1.08-1.964-0.343-4.375-2.588-4.375h-19.905c-2.24,0-3.669,2.409-2.588,4.375
			l7.252,13.19l-8.188,14.893c-0.95,1.727-1.259,3.733-0.876,5.667l4.244,21.375c6.251-1.813,8.135-2.556,11.783-2.556
			c2.904,0,5.709,0.613,8.273,1.727l4.35-20.492C162.587,134.666,162.283,132.616,161.315,130.855z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M153.622,175.154c-0.633-2.184-2.949-3.573-5.268-2.898l-53.824,15.611c-2.252,0.653-3.552,3.017-2.899,5.267
			l21.462,73.991c0.635,2.19,3.023,3.551,5.268,2.898l14.357-4.164c-0.855-1.056-1.67-2.158-2.417-3.331
			c-10.744-16.83-5.809-39.185,11.021-49.928l19.544-12.475L153.622,175.154z"
          />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M248.639,192.318c-4.153-11.54-7.283-20.289-10.049-28.103c-3.074-8.688-5.694-16.219-8.756-25.129
			c-9.434-27.452-25.252-41.37-47.014-41.37h-0.985c-4.458,11.646-18.727,48.924-22.939,59.927
			c5.095,2.566,9.097,7.159,10.751,12.865l5.877,20.261l23.896-15.253l0.026-0.017c1.652,4.682,3.416,9.643,5.44,15.299
			l-55.051,35.142c-9.466,6.043-12.24,18.614-6.199,28.078c6.042,9.466,18.614,12.243,28.08,6.199l68.732-43.873
			C248.455,211.231,251.856,201.256,248.639,192.318z"
          />
        </g>
      </g>
    </svg>
  );
};

export const CategoriesLogoSvg = () => {
  return (
    <svg
      className={`shrink-0 fill-current text-gray-400 dark:text-gray-500`}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clipPath="url(#clip0_429_11052)">
        <circle
          cx="17"
          cy="7"
          r="3"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="7"
          cy="17"
          r="3"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 14H20V19C20 19.5523 19.5523 20 19 20H15C14.4477 20 14 19.5523 14 19V14Z"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 4H10V9C10 9.55228 9.55228 10 9 10H5C4.44772 10 4 9.55228 4 9V4Z"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_429_11052">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const TransactionsLogoSvg = () => {
  return (
    <svg
      className={`shrink-0 fill-current text-gray-400 dark:text-gray-500`}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.2929 3.29289C15.6834 2.90237 16.3166 2.90237 16.7071 3.29289L22.3657 8.95147C23.1216 9.70743 22.5862 11 21.5172 11H2C1.44772 11 1 10.5523 1 10C1 9.44772 1.44772 9 2 9H19.5858L15.2929 4.70711C14.9024 4.31658 14.9024 3.68342 15.2929 3.29289ZM4.41421 15H22C22.5523 15 23 14.5523 23 14C23 13.4477 22.5523 13 22 13H2.48284C1.41376 13 0.878355 14.2926 1.63431 15.0485L7.29289 20.7071C7.68342 21.0976 8.31658 21.0976 8.70711 20.7071C9.09763 20.3166 9.09763 19.6834 8.70711 19.2929L4.41421 15Z"
        fill="#0F0F0F"
      />
    </svg>
  );
};
export const ProfileLogoSvg = () => {
  return (
    <svg
      className={`shrink-0 fill-current text-gray-400 dark:text-gray-500`}
      width="18"
      height="18"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={2}
    >
      <g transform="translate(-1216 -192)">
        <path fill="none" d="M0 0H1280V800H0z" />
        <path
          d="M50 46.5c-7.2 0-13-5.8-13-13s5.8-13 13-13 13 5.8 13 13-5.8 13-13 13zm0-22c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9z"
          fillRule="nonzero"
          transform="translate(-20.846 199.979) scale(1.03318) matrix(.9091 0 0 .9091 1182.28 -18.636)"
        />
        <path
          d="M34.036 58.5V67H30.4v-8.5c0-7.182 8.818-12.727 20-12.727s20 5.545 20 12.727V67h-3.636v-8.5c0-4.909-7.455-9.091-16.364-9.091S34.036 53.591 34.036 58.5z"
          fillRule="nonzero"
          transform="translate(-20.846 199.979) scale(1.03318) translate(1177.7 -20.5)"
        />
      </g>
    </svg>
  );
};
export const AccountLogoSvg = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 fill-current text-gray-400 dark:text-gray-500`}
      width="18"
      height="18"
    >
      <path d="M9.6 3.32a3.86 3.86 0 103.86 3.85A3.85 3.85 0 009.6 3.32M16.35 11a.26.26 0 00-.25.21l-.18 1.27a4.63 4.63 0 00-.82.45l-1.2-.48a.3.3 0 00-.3.13l-1 1.66a.24.24 0 00.06.31l1 .79a3.94 3.94 0 000 1l-1 .79a.23.23 0 00-.06.3l1 1.67c.06.13.19.13.3.13l1.2-.49a3.85 3.85 0 00.82.46l.18 1.27a.24.24 0 00.25.2h1.93a.24.24 0 00.23-.2l.18-1.27a5 5 0 00.81-.46l1.19.49c.12 0 .25 0 .32-.13l1-1.67a.23.23 0 00-.06-.3l-1-.79a4 4 0 000-.49 2.67 2.67 0 000-.48l1-.79a.25.25 0 00.06-.31l-1-1.66c-.06-.13-.19-.13-.31-.13l-1.2.52a4.07 4.07 0 00-.82-.45l-.18-1.27a.23.23 0 00-.22-.21h-1.82M9.71 13C5.45 13 2 14.7 2 16.83v1.92h9.33a6.65 6.65 0 010-5.69A13.56 13.56 0 009.71 13m7.6 1.43a1.45 1.45 0 110 2.89 1.45 1.45 0 010-2.89z" />
    </svg>
  );
};
export const LogoutLogoSvg = () => {
  return (
    <svg
      className={`shrink-0 fill-current text-gray-400 dark:text-gray-500`}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 12H2m0 0l3.5-3M2 12l3.5 3"
        stroke="#1C274C"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121-.769.769-1.947.865-4.122.877M9.002 17c.012 2.175.109 3.353.877 4.121.641.642 1.568.815 3.121.862"
        stroke="#1C274C"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
};

export const LoadingSpinner = () => {
  return (
    <svg
      className="text-gray-500 animate-spin"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
    >
      <path
        d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="bg-blue-900"
      />
    </svg>
  );
};
interface TriangleSvgProps {
  color?: string;
  dir?: "up" | "down" | undefined;
}

interface TriangleSvgProps {
  color?: string;
  dir?: "up" | "down";
}

export const TriangleSvg = ({
  color = "green",
  dir = "up",
}: TriangleSvgProps) => {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      version="1.1"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width={20} height={20} id="icon-bound" fill="none" />
      <polygon
        points="10,2 19,14 1,14"
        transform={dir === "down" ? "rotate(180, 10, 10)" : undefined}
      />
    </svg>
  );
};
