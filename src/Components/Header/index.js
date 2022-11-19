import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Encabezado = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/' title="Home">
              <svg
              
                className='Link'
                height='512pt'
                preserveAspectRatio='xMidYMid meet'
                viewBox='0 0 512 512'
                width='512pt'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g transform='matrix(.1 0 0 -.1 0 512)'>
                  <path d='m2393 5026c-202-39-362-126-515-283-177-181-1829-2050-1851-2093-33-67-30-176 6-246 81-157 288-202 425-91 22 18 430 471 907 1007s892 1001 923 1032c123 127 310 153 451 64 54-34 85-69 1025-1116 477-531 887-980 912-997 58-41 114-57 185-50 97 9 182 65 226 151 36 70 39 179 6 247-23 46-1798 2032-1911 2138-114 106-247 180-397 221-102 28-290 35-392 16z' />
                  <path d='m2438 4131c-26-10-63-28-82-40-37-23-1492-1720-1558-1818-21-30-45-78-53-106-37-122-36-132 114-1018 101-596 146-839 161-871 34-73 85-124 158-160l67-33 677-3 678-3v598c0 575 1 599 20 630 37 62 43 63 422 63 318 0 345-1 374-19 65-40 64-26 64-681v-592l188 4c169 3 192 5 236 26 79 36 132 86 166 155 28 57 43 136 171 892 153 905 152 901 108 1022-12 32-34 76-49 98-40 61-1487 1755-1531 1793-87 75-233 103-331 63zm-276-2739 33-32 3-283c3-282 3-283-20-317-41-60-45-60-356-58l-284 3-34 37-34 38v286 286l39 40 40 39 290-3 291-3z' />
                </g>
              </svg>
            </Link>
          </li>
          <li>
            <Link to='/sobre_mi' title="About me">
              <svg
                className='Link'
                height='980pt'
                preserveAspectRatio='xMidYMid meet'
                viewBox='0 0 674 980'
                width='674pt'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g transform='matrix(.1 0 0 -.1 0 980)'>
                  <path d='m3190 9790c-434-60-795-286-1041-654-135-201-219-434-254-708-4-34-11-48-22-48-12 0-14-9-9-47 3-27 8-77 11-113l5-65-64-52c-54-44-130-132-244-287-77-103-105-213-105-406 0-217 42-370 124-452 26-26 60-71 76-100 60-114 172-196 365-268 122-46 118-51 118 169v176l51-95c236-446 736-742 1209-717 474 25 915 317 1128 747l37 74 5-189c4-164 7-190 21-193 20-4 206 70 266 105 72 42 151 121 189 189 20 35 48 73 63 83 121 87 179 492 106 739-33 111-271 407-377 470-21 12-28 23-24 37 2 11 8 59 11 108 6 76 5 87-8 87-22 0-37 31-37 77 0 51-34 210-66 308-32 99-118 278-174 365-218 333-551 562-933 641-115 23-326 33-427 19zm377-229c474-93 848-458 997-974 27-92 53-231 58-307 2-40 0-45-19-48-21-3-22-8-25-120l-3-117-33 68c-128 262-385 513-645 631-366 167-732 162-1092-13-264-129-468-327-610-593l-44-83-3 110-3 109-34 10-34 10 6 76c13 162 79 395 157 550 185 368 516 627 887 694 117 21 323 20 440-3z' />
                  <path d='m2090 5800c-8-4-40-20-70-34-66-30-143-104-187-177-19-32-400-1059-923-2488-707-1931-893-2449-902-2510-34-240 123-484 360-563 237-78 512 32 625 250 19 37 281 702 583 1479 301 777 549 1411 551 1410 2-3-180-1688-192-1774l-6-43h1441 1440l-5 37c-11 76-194 1777-192 1780 2 1 250-633 551-1410 302-777 560-1437 575-1467 14-30 55-85 90-122 195-208 519-221 732-30 130 116 196 299 169 466-7 45-307 876-896 2484-486 1329-896 2441-910 2470-38 77-130 172-201 206-32 15-66 32-75 37-23 12-2538 11-2558-1z' />
                </g>
              </svg>
            </Link>
          </li>
          <li>
            <Link to='/servicios' title="Services">
              <svg
                className='Link'
                height='1600pt'
                preserveAspectRatio='xMidYMid meet'
                viewBox='0 0 1600 1600'
                width='1600pt'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g transform='matrix(.1 0 0 -.1 0 1600)'>
                  <path d='m7443 15359c-102-13-202-87-243-182-10-23-58-262-106-531-79-433-91-490-109-497-11-5-65-25-120-45s-144-56-198-81l-98-44-389 281c-214 155-411 293-437 308-42 24-59 27-138 27-78 0-97-4-140-27-35-18-163-137-426-397-410-403-415-410-426-531-10-108 2-130 313-580 262-380 285-417 276-440-6-14-33-74-60-135-27-60-62-146-78-190-15-44-28-81-29-82-1-2-225-39-499-83-555-90-559-91-639-180-83-92-81-79-82-700v-545l27-52c34-63 95-124 150-149 22-10 263-59 535-108l495-91 42-115c24-63 64-160 89-214l46-100-22-30c-12-17-140-195-286-396-145-201-275-390-289-420-20-43-26-71-26-127-1-128 15-148 432-568 392-397 409-410 525-422 105-11 130 3 587 317l422 291 106-49c107-49 293-122 311-122 12 0 6 32 101-529 48-281 88-491 99-517 29-65 93-128 163-159l62-28 545-1 546-1 53 24c65 29 144 113 166 176 8 26 52 263 97 528 44 265 84 485 87 489 4 3 52 23 107 43 55 21 148 59 208 85l107 49 418-297c253-180 434-302 458-310 23-6 73-12 112-12 121 0 141 15 556 423 419 411 426 420 426 556 0 59-6 87-24 126-12 28-152 231-310 452l-286 403 31 62c18 35 58 128 90 208 46 116 62 147 81 153 13 4 239 44 503 88 436 73 485 83 538 111 64 34 106 81 140 155 22 48 22 50 22 608v560l-29 53c-17 29-46 67-65 84-70 62-111 72-628 159l-492 84-37 104c-20 58-59 155-85 215-27 60-45 114-42 120 4 6 132 187 284 403 153 216 288 411 301 435 19 35 23 59 23 129 0 137-2 140-426 569-416 420-419 422-553 422-52 0-87-6-120-20-25-12-223-146-439-300-215-153-397-281-403-285-7-4-58 15-115 42s-151 66-208 87c-72 27-106 45-112 59-4 11-42 234-83 495-70 440-78 480-108 540-24 45-47 75-82 101-90 68-94 69-646 71-272 2-519 0-547-3zm731-656c3-16 35-212 71-438 36-225 73-432 82-460 11-35 33-67 72-106 60-59 71-65 264-124 156-47 301-110 467-200 74-40 155-79 180-85 47-13 124-8 178 11 17 6 199 129 404 275l373 264 147-147 147-147-18-25c-10-14-131-185-269-378-138-194-256-370-263-390-8-21-13-70-13-110 0-70 2-75 86-240 104-202 159-337 203-499 39-142 61-189 112-240 69-68 105-77 563-154 234-38 435-72 448-75 22-5 22-7 22-193 0-103-3-196-6-207-5-18-45-27-447-94-243-41-461-80-484-88-53-18-137-93-164-145-11-22-34-88-51-146-43-151-101-296-171-431-139-267-132-247-131-325 1-48 7-85 21-116 11-25 138-211 282-414l262-370-143-143c-78-79-146-143-150-143-5 0-176 119-382 265-205 146-393 272-416 280s-75 15-115 15c-72 0-76-1-238-85-195-100-324-153-501-204-72-21-144-45-161-54-45-23-112-96-134-147-12-28-47-208-91-470-39-234-74-435-77-448l-5-22-207 2-206 3-76 450c-42 248-82 463-88 479-41 102-121 162-276 206-213 60-309 101-639 274-51 26-69 30-130 30-39-1-90-8-113-17-22-8-211-133-419-276l-377-261-141 147c-78 80-142 148-143 152-2 3 116 170 262 371 155 214 271 383 280 409 8 25 15 77 15 116 0 71-1 74-98 266-99 195-164 358-203 512-36 144-90 216-194 262-33 15-196 49-487 101l-438 79v207c0 188 2 207 18 212 9 3 204 35 432 71s436 73 462 81c57 19 141 91 170 148 11 22 33 84 48 137 58 202 104 308 272 630 38 73 47 155 24 230-11 38-66 126-190 306-96 138-212 307-259 376l-86 124 147 146 147 147 355-256c195-141 380-268 410-282 43-21 71-26 128-26 71 0 75 1 232 82 197 102 341 161 522 212 182 52 236 88 288 191 13 24 50 204 102 488l83 451h207 206z' />
                  <path d='m7646 12790c-313-57-607-208-833-429-135-133-226-257-311-427-159-318-205-684-132-1044 107-523 490-968 995-1155 776-287 1637 58 1990 798 61 128 96 230 127 372 30 136 33 483 5 615-67 318-199 575-409 796-227 237-503 393-830 465-140 31-453 36-602 9zm538-644c319-96 567-344 662-662 32-110 43-293 24-412-62-388-367-706-756-787-100-21-285-22-379-1-420 91-726 433-764 853-35 398 175 770 537 947 152 75 256 97 442 92 122-3 159-8 234-30z' />
                  <path d='m4310 7104c-19-2-91-9-160-15-151-13-356-49-505-89-373-99-1358-509-2560-1066-265-123-316-151-357-191-65-64-92-128-92-223 0-90 22-147 84-214 63-69 137-101 230-100 85 0 36-20 585 234 683 316 1161 524 1710 745 388 156 489 192 630 225 377 87 1015 87 1450-1 141-28 321-90 450-154 175-86 290-181 556-456 309-319 414-402 608-484 330-139 691-245 1076-314 376-68 697-97 1214-111 422-11 524-27 686-106 198-97 276-255 234-479-14-77-31-109-88-168-88-92-233-152-438-182-96-14-236-16-1174-12-1140 4-1075 1-1449 57-297 45-736 132-1085 215-190 46-259 46-343 5-189-95-234-338-91-494 61-67 98-83 324-140 488-122 962-208 1415-258 200-22 230-23 1275-23 1126 0 1153 1 1360 46 111 25 239 68 347 118 73 33 597 374 2728 1774 389 255 482 311 643 387 387 181 701 235 869 149 76-39 168-162 168-227 0-82-74-217-190-344-95-104-236-217-460-367-678-456-2980-1951-3955-2571-346-219-989-609-1138-689-471-253-889-248-1497 21-141 62-784 386-2048 1029-408 209-791 400-850 425-238 102-390 138-587 138s-360-43-572-154c-142-74-1002-623-1054-672-59-57-82-110-87-203-5-103 20-175 83-239 70-69 123-91 230-91 69 0 98 4 125 19 19 10 229 143 465 294 440 282 609 379 703 400 122 27 253 7 427-67 51-22 426-210 832-417 1125-574 1984-1004 2123-1063 375-159 707-233 1040-232 415 1 740 104 1191 377 79 48 252 152 384 232s355 217 495 305c1079 678 3994 2580 4275 2790 402 300 621 599 676 922 16 93 6 269-21 370-85 323-343 566-695 656-222 57-515 34-817-65l-97-32-68 75c-165 182-404 306-711 368-67 14-136 18-297 18-197 0-216-2-315-27-58-16-127-36-154-47l-50-19-71 60c-210 175-452 289-709 333-118 20-377 20-514-1-206-30-427-98-617-189-111-54-108-52-1166-712l-866-541-134 30c-246 55-557 153-750 237-51 22-92 60-253 236-520 571-1053 841-1856 940-118 15-666 29-750 19zm6903-663c80-21 197-68 197-80 0-4-328-210-729-459l-730-452-83 20c-111 26-301 50-397 50-145 0-380 13-376 21 3 4 56 39 118 77 61 38 322 200 578 360s499 307 540 327c100 51 319 122 448 145 135 25 318 21 434-9zm1530-307c39-9 110-34 157-56 78-38 83-42 65-54-11-7-508-333-1105-724l-1084-711-17 68c-34 135-83 247-156 352-43 61-44 66-26 78 10 8 359 225 775 483 530 329 783 480 843 505 82 33 190 68 245 79 44 8 228-3 303-20z' />
                </g>
              </svg>
            </Link>
          </li>
          <li>
            <Link to='/portafolio' title="Briefcase">
              <svg
                className='Link'
                height='680pt'
                preserveAspectRatio='xMidYMid meet'
                viewBox='0 0 980 680'
                width='980pt'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g transform='matrix(.1 0 0 -.1 0 680)'>
                  <path d='m3137 6784c-196-35-381-164-481-333-79-136-105-263-106-523v-118h-1068c-1162 0-1120 2-1234-56-109-55-212-193-237-317-8-36-10-692-9-2182l3-2129 799 1619c439 891 824 1658 854 1705 61 95 200 238 307 318 93 68 258 153 374 192 191 64-4 60 2822 60h2579v193c0 213-8 257-60 356-57 107-183 203-301 230-28 7-430 11-1116 11h-1073v138c0 325-49 470-215 637-119 119-241 181-401 205-41 6-334 9-714 9-508-1-662-4-723-15zm1438-483c22-10 54-34 72-52 56-59 63-90 63-274v-165h-840-840v163c0 149 2 166 24 212 24 53 70 99 121 121 24 10 169 13 695 13 627 1 667-1 705-18z' />
                  <path d='m2540 4529c-94-24-205-76-284-133-70-50-171-153-208-211-14-22-442-885-952-1918-644-1305-932-1897-943-1943-39-157 49-282 221-313 42-8 1060-11 3480-11 2819 1 3434 3 3496 14 170 31 339 124 464 257 91 96-20-120 1109 2169 471 954 861 1755 866 1780 25 109 3 188-69 253-94 85 268 77-3636 76-3411 0-3470 0-3544-20z' />
                </g>
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Encabezado;
