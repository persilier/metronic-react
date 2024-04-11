

const Breadcrumbs = () => {
  return (
   
<div className="toolbar" id="kt_toolbar">
          {/*begin::Container*/}
          <div id="kt_toolbar_container" className="container-fluid d-flex flex-stack">
            {/*begin::Page title*/}
            <div data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}" className="flex-wrap mb-5 page-title d-flex align-items-center me-3 mb-lg-0">
              {/*begin::Title*/}
              <h1 className="my-1 d-flex text-dark fw-bolder fs-3 align-items-center">Dashboard
                {/*begin::Separator*/}
                <span className="mx-2 border-gray-200 h-20px border-1 border-start ms-3 me-1" />
                {/*end::Separator*/}
                {/*begin::Description*/}
                <span className="mt-2 text-muted fs-7 fw-bold">#XRS-45670</span>
                {/*end::Description*/}</h1>
              {/*end::Title*/}
            </div>
            {/*end::Page title*/}
            {/*begin::Actions*/}
            <div className="gap-2 mt-4 d-flex align-items-center gap-lg-3">
              {/*begin::Filter menu*/}
              <div className="m-0">
                {/*begin::Menu toggle*/}
                <a href="#" className="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                  {/*begin::Svg Icon | path: icons/duotune/general/gen031.svg*/}
                  <span className="svg-icon svg-icon-5 svg-icon-gray-500 me-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}Filter</a>
                {/*end::Menu toggle*/}
                {/*begin::Menu 1*/}
                <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_6244763d93048">
                  {/*begin::Header*/}
                  <div className="py-5 px-7">
                    <div className="fs-5 text-dark fw-bolder">Filter Options</div>
                  </div>
                  {/*end::Header*/}
                  {/*begin::Menu separator*/}
                  <div className="border-gray-200 separator" />
                  {/*end::Menu separator*/}
                  {/*begin::Form*/}
                  <div className="py-5 px-7">
                    {/*begin::Input group*/}
                    <div className="mb-10">
                      {/*begin::Label*/}
                      <label className="form-label fw-bold">Status:</label>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <div>
                        <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_6244763d93048" data-allow-clear="true">
                          <option />
                          <option value={1}>Approved</option>
                          <option value={2}>Pending</option>
                          <option value={2}>In Process</option>
                          <option value={2}>Rejected</option>
                        </select>
                      </div>
                      {/*end::Input*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="mb-10">
                      {/*begin::Label*/}
                      <label className="form-label fw-bold">Member Type:</label>
                      {/*end::Label*/}
                      {/*begin::Options*/}
                      <div className="d-flex">
                        {/*begin::Options*/}
                        <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                          <input className="form-check-input" type="checkbox" defaultValue={1} />
                          <span className="form-check-label">Author</span>
                        </label>
                        {/*end::Options*/}
                        {/*begin::Options*/}
                        <label className="form-check form-check-sm form-check-custom form-check-solid">
                          <input className="form-check-input" type="checkbox" defaultValue={2} defaultChecked="checked" />
                          <span className="form-check-label">Customer</span>
                        </label>
                        {/*end::Options*/}
                      </div>
                      {/*end::Options*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="mb-10">
                      {/*begin::Label*/}
                      <label className="form-label fw-bold">Notifications:</label>
                      {/*end::Label*/}
                      {/*begin::Switch*/}
                      <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                        <input className="form-check-input" type="checkbox" defaultValue name="notifications" defaultChecked="checked" />
                        <label className="form-check-label">Enabled</label>
                      </div>
                      {/*end::Switch*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Actions*/}
                    <div className="d-flex justify-content-end">
                      <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                      <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                    </div>
                    {/*end::Actions*/}
                  </div>
                  {/*end::Form*/}
                </div>
                {/*end::Menu 1*/}
              </div>
              {/*end::Filter menu*/}
              {/*begin::Secondary button*/}
              {/*end::Secondary button*/}
              {/*begin::Primary button*/}
              <a href="../../demo1/dist/.html" className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">Create</a>
              {/*end::Primary button*/}
            </div>
            {/*end::Actions*/}
          </div>
          {/*end::Container*/}
        </div>

  )
}

export default Breadcrumbs