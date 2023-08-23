/*************************************************************
 *
 *  MathJax/fonts/HTML-CSS/TeX/png/Fraktur/Bold/PUA.js
 *  
 *  Defines the image size data needed for the HTML-CSS OutputJax
 *  to display mathematics using fallback images when the fonts
 *  are not available to the client browser.
 *
 *  ---------------------------------------------------------------------
 *
 *  Copyright (c) 2009-2013 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

MathJax.OutputJax["HTML-CSS"].defineImageData({
  "MathJax_Fraktur-bold": {
    0xE301: [  // ??
      [4,6,1],[5,7,1],[6,8,1],[6,9,1],[8,10,1],[9,12,1],[10,14,1],[12,16,1],
      [15,19,1],[17,22,1],[20,27,2],[24,32,2],[29,37,2],[34,44,2]
    ],
    0xE302: [  // ??
      [3,7,2],[4,8,2],[4,10,3],[5,12,3],[6,13,3],[7,16,4],[8,19,5],[10,22,6],
      [12,26,6],[14,30,7],[16,37,9],[19,43,10],[23,51,12],[27,60,14]
    ],
    0xE303: [  // ??
      [3,7,2],[4,8,2],[4,10,3],[5,11,3],[6,13,3],[7,16,4],[8,19,5],[9,22,6],
      [11,26,7],[13,31,8],[15,36,9],[18,43,11],[21,51,13],[26,60,15]
    ],
    0xE304: [  // ??
      [4,6,2],[5,6,2],[6,7,2],[7,9,3],[8,10,3],[9,12,4],[11,15,5],[13,16,5],
      [15,19,6],[18,23,7],[21,28,9],[25,32,10],[30,38,12],[35,45,14]
    ],
    0xE305: [  // ??
      [3,6,1],[4,7,1],[4,8,1],[5,10,1],[6,11,1],[7,13,1],[8,15,1],[9,17,1],
      [11,20,1],[13,24,1],[16,29,2],[18,34,2],[22,40,2],[26,48,2]
    ],
    0xE308: [  // ??
      [7,7,2],[8,8,2],[9,9,2],[11,11,3],[13,13,3],[15,16,4],[18,19,5],[21,22,6],
      [25,26,7],[29,31,8],[35,36,9],[41,43,11],[49,51,13],[58,60,15]
    ],
    0xE309: [  // ??
      [5,6,1],[6,8,2],[7,10,2],[8,11,2],[9,12,2],[11,15,3],[13,17,3],[15,20,3],
      [18,24,4],[21,29,5],[25,35,6],[30,41,7],[35,48,8],[42,58,10]
    ]
  }
});

MathJax.Ajax.loadComplete(MathJax.OutputJax["HTML-CSS"].imgDir+"/Fraktur/Bold"+
                          MathJax.OutputJax["HTML-CSS"].imgPacked+"/PUA.js");
