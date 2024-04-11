

const Footer = () => {
  return (
    
<div id="kt_app_footer" className="app-footer ">
  {/*begin::Footer container*/}
  <div className="py-3 app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack ">
    {/*begin::Copyright*/}
    <div className="order-2 text-dark order-md-1">
      <span className="text-muted fw-semibold me-1">2023©</span>
      <a href="https://keenthemes.com" target="_blank" className="text-gray-800 text-hover-primary" rel="noreferrer">Keenthemes</a>
    </div>
    {/*end::Copyright*/}
    {/*begin::Menu*/}
    <ul className="order-1 menu menu-gray-600 menu-hover-primary fw-semibold">
      <li className="menu-item"><a href="https://keenthemes.com" target="_blank" className="px-2 menu-link" rel="noreferrer">About</a></li>
      <li className="menu-item"><a href="https://devs.keenthemes.com" target="_blank" className="px-2 menu-link" rel="noreferrer">Support</a></li>
      <li className="menu-item"><a href="https://1.envato.market/EA4JP" target="_blank" className="px-2 menu-link" rel="noreferrer">Purchase</a></li>
    </ul>
    {/*end::Menu*/}      </div>
  {/*end::Footer container*/}
</div>


  )
}

export default Footer