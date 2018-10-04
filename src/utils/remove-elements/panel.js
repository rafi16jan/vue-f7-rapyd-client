/**
 * function to remove panel element when logout
 * it will hide .panel element
 * then set .view.view-main margin-left style to 0 if user use tablet/notebook
 * otherwise it will set hide .panel-backdrop element
 * @export
 */
export default function removePanelElement () {
  document.querySelector('.panel').style.display = 'none'
  document.querySelector('.view.view-main').style.marginLeft = 0
  document.querySelector('.panel-backdrop').style.display = 'none'
}
