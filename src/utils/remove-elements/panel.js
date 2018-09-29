/**
 * function to remove panel element when logout
 *
 * @export
 */
export default function removePanelElement () {
  /**
   * destroy panel after logout
   * Maybe I can use document.querySelector('.panel.panel-left').remove()
   * but according to https://www.w3schools.com/js/js_htmldom_css.asp
   * .remove() function is not working at any versions of IE
   */
  let panelElement = document.querySelector('.framework7-modals .panel')
  panelElement.parentNode.removeChild(panelElement)
  /**
   * then I set margin-left style value of .view-main to 0
   */
  document.querySelector('.view.view-main').style.marginLeft = 0
}
