document.getElementById('title')
<h1 id=​"title">​title​</h1>​
document.getElementsByClassName('paragraph')
HTMLCollection(2) [p.paragraph, p.paragraph]0: p.paragraphaccessKey: ""align: ""ariaAtomic: nullariaAutoComplete: nullariaBusy: nullariaChecked: nullariaColCount: nullariaColIndex: nullariaColSpan: nullariaCurrent: nullariaDescription: nullariaDisabled: nullariaExpanded: nullariaHasPopup: nullariaHidden: nullariaKeyShortcuts: nullariaLabel: nullariaLevel: nullariaLive: nullariaModal: nullariaMultiLine: nullariaMultiSelectable: nullariaOrientation: nullariaPlaceholder: nullariaPosInSet: nullariaPressed: nullariaReadOnly: nullariaRelevant: nullariaRequired: nullariaRoleDescription: nullariaRowCount: nullariaRowIndex: nullariaRowSpan: nullariaSelected: nullariaSetSize: nullariaSort: nullariaValueMax: nullariaValueMin: nullariaValueNow: nullariaValueText: nullassignedSlot: nullattributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {0: class, class: class, length: 1}autocapitalize: ""autofocus: falsebaseURI: "http://127.0.0.1:5500/DOM/Elements&Attributes.html"childElementCount: 0childNodes: NodeList [text]children: HTMLCollection []classList: DOMTokenList ['paragraph', value: 'paragraph']className: "paragraph"clientHeight: 18clientLeft: 0clientTop: 0clientWidth: 134contentEditable: "inherit"dataset: DOMStringMap {}dir: ""draggable: falseelementTiming: ""enterKeyHint: ""firstChild: textfirstElementChild: nullhidden: falseid: ""innerHTML: "Paragraph text 1"innerText: "Paragraph text 1"inputMode: ""isConnected: trueisContentEditable: falselang: ""lastChild: textlastElementChild: nulllocalName: "p"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: p.paragraphnextSibling: textnodeName: "P"nodeType: 1nodeValue: nullnonce: ""offsetHeight: 18offsetLeft: 8offsetParent: bodyoffsetTop: 80offsetWidth: 134onabort: nullonanimationend: nullonanimationiteration: nullonanimationstart: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforepaste: nullonbeforexrselect: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontextmenu: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonformdata: nullonfullscreenchange: nullonfullscreenerror: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerrawupdate: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonsearch: nullonsecuritypolicyviolation: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonslotchange: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullontransitioncancel: nullontransitionend: nullontransitionrun: nullontransitionstart: nullonvolumechange: nullonwaiting: nullonwebkitanimationend: nullonwebkitanimationiteration: nullonwebkitanimationstart: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwebkittransitionend: nullonwheel: nullouterHTML: "<p class=\"paragraph\">Paragraph text 1</p>"outerText: "Paragraph text 1"ownerDocument: documentparentElement: bodyparentNode: bodypart: DOMTokenList [value: '']prefix: nullpreviousElementSibling: h1#titlepreviousSibling: textscrollHeight: 18scrollLeft: 0scrollTop: 0scrollWidth: 134shadowRoot: nullslot: ""spellcheck: truestyle: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "P"textContent: "Paragraph text 1"title: ""translate: truevirtualKeyboardPolicy: ""[[Prototype]]: HTMLParagraphElement(...)1: p.paragraphlength: 2[[Prototype]]: HTMLCollection
document.getElementsByClassName('paragraph')[0]
<p class=​"paragraph">​Paragraph text 1​</p>​
document.getElementsByClassName('paragraph')[1]
<p class=​"paragraph">​Paragraph text 2​</p>​
document.getElementsByTagName('ul')
HTMLCollection [ul]0: ullength: 1[[Prototype]]: HTMLCollection
var ul = document.getElementsByTagName('ul')[0]
undefined
ul.getElementsByTagName('li')[2]
<li>​…​</li>​::marker​"List element 3"</li>​
var p = document.getElementsByClassName('paragraph')[0]
undefined
p
<p class=​"paragraph">​Paragraph text 1​</p>​
p.innerText
'Paragraph text 1'
p.tagName
'P'
p.getAttribute
ƒ getAttribute() { [native code] }
p.getAttribute('class')
'paragraph'
document.getElementsByTagName('input')[0]
<input type=​"text">​
document.getElementsByTagName('input')[0].value
'qwerty'
