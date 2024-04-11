

const Navbar = () => {
  return (
    
<div className="flex-shrink-0 app-navbar">
  {/*begin::Search*/}
  <div className="app-navbar-item align-items-stretch ms-1 ms-md-4">
    {/*layout-partial:partials/search/_dropdown.html*/}
  </div>
  {/*end::Search*/}
  {/*begin::Activities*/}
  <div className="app-navbar-item ms-1 ms-md-4">
    {/*begin::Drawer toggle*/}
    <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px" id="kt_activities_toggle">
      <i className="ki-outline ki-messages fs-2" />      </div>
    {/*end::Drawer toggle*/}
  </div>
  {/*end::Activities*/}
  {/*begin::Notifications*/}
  <div className="app-navbar-item ms-1 ms-md-4">
    {/*begin::Menu- wrapper*/}
    <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end" id="kt_menu_item_wow">
      <i className="ki-outline ki-notification-status fs-2" />      </div>
    {/*layout-partial:partials/menus/_notifications-menu.html*/}
    {/*end::Menu wrapper*/}
  </div>
  {/*end::Notifications*/}
  {/*begin::Chat*/}
  <div className="app-navbar-item ms-1 ms-md-4">
    {/*begin::Menu wrapper*/}
    <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px position-relative" id="kt_drawer_chat_toggle">
      <i className="ki-outline ki-message-text-2 fs-2" />
      <span className="top-0 bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle start-50 animation-blink">
      </span>
    </div>
    {/*end::Menu wrapper*/}
  </div>
  {/*end::Chat*/}
  {/*begin::My apps links*/}
  <div className="app-navbar-item ms-1 ms-md-4">
    {/*begin::Menu wrapper*/}
    <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
      <i className="ki-outline ki-element-11 fs-2" />      </div>
    {/*layout-partial:partials/menus/_my-apps-menu.html*/}
    {/*end::Menu wrapper*/}
  </div>
  {/*end::My apps links*/}
  {/*begin::Theme mode*/}
  <div className="app-navbar-item ms-1 ms-md-4">
    {/*layout-partial:partials/theme-mode/_main.html*/}
  </div>
  {/*end::Theme mode*/}
  {/*begin::User menu*/}
  <div className="app-navbar-item ms-1 ms-md-4" id="kt_header_user_menu_toggle">
    {/*begin::Menu wrapper*/}
    <div className="cursor-pointer symbol symbol-35px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
      <img src="assets/media/avatars/300-3.jpg" className="rounded-3" alt="user" />
    </div>
    {/*layout-partial:partials/menus/_user-account-menu.html*/}
    {/*end::Menu wrapper*/}
  </div>
  {/*end::User menu*/}
  {/*begin::Header menu toggle*/}
  <div className="app-navbar-item d-lg-none ms-2 me-n2" title="Show header menu">
    <div className="btn btn-flex btn-icon btn-active-color-primary w-30px h-30px" id="kt_app_header_menu_toggle">
      <i className="ki-outline ki-element-4 fs-1" />          </div>
  </div>
  {/*end::Header menu toggle*/}
  {/*begin::Aside toggle*/}
  {/*end::Header menu toggle*/}
</div>

  )
}

export default Navbar