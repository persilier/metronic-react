

const Dashboard = () => {
  return (
   
    <div className="post d-flex flex-column-fluid" id="kt_post">
    {/*begin::Container*/}
    <div id="kt_content_container" className="container-xxl">
      {/*begin::Row*/}
      <div className="row gy-5 g-xl-8">
        {/*begin::Col*/}
        <div className="col-xl-4">
          {/*begin::Mixed Widget 2*/}
          <div className="card card-xl-stretch">
            {/*begin::Header*/}
            <div className="py-5 border-0 card-header bg-danger">
              <h3 className="text-white card-title fw-bolder">Sales Statistics</h3>
              <div className="card-toolbar">
                {/*begin::Menu*/}
                <button type="button" className="border-0 btn btn-sm btn-icon btn-color-white btn-active-white btn-active-color- me-n3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                  {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                  <span className="svg-icon svg-icon-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <rect x={5} y={5} width={5} height={5} rx={1} fill="currentColor" />
                        <rect x={14} y={5} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                        <rect x={5} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                        <rect x={14} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                      </g>
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </button>
                {/*begin::Menu 3*/}
                <div className="py-3 menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px" data-kt-menu="true">
                  {/*begin::Heading*/}
                  <div className="px-3 menu-item">
                    <div className="px-3 pb-2 menu-content text-muted fs-7 text-uppercase">Payments</div>
                  </div>
                  {/*end::Heading*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item">
                    <a href="#" className="px-3 menu-link">Create Invoice</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item">
                    <a href="#" className="px-3 menu-link flex-stack">Create Payment
                      <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference" /></a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item">
                    <a href="#" className="px-3 menu-link">Generate Bill</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                    <a href="#" className="px-3 menu-link">
                      <span className="menu-title">Subscription</span>
                      <span className="menu-arrow" />
                    </a>
                    {/*begin::Menu sub*/}
                    <div className="py-4 menu-sub menu-sub-dropdown w-175px">
                      {/*begin::Menu item*/}
                      <div className="px-3 menu-item">
                        <a href="#" className="px-3 menu-link">Plans</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="px-3 menu-item">
                        <a href="#" className="px-3 menu-link">Billing</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="px-3 menu-item">
                        <a href="#" className="px-3 menu-link">Statements</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="my-2 separator" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="px-3 menu-item">
                        <div className="px-3 menu-content">
                          {/*begin::Switch*/}
                          <label className="form-check form-switch form-check-custom form-check-solid">
                            {/*begin::Input*/}
                            <input className="form-check-input w-30px h-20px" type="checkbox" defaultValue={1} defaultChecked="checked" name="notifications" />
                            {/*end::Input*/}
                            {/*end::Label*/}
                            <span className="form-check-label text-muted fs-6">Recuring</span>
                            {/*end::Label*/}
                          </label>
                          {/*end::Switch*/}
                        </div>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu sub*/}
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 my-1 menu-item">
                    <a href="#" className="px-3 menu-link">Settings</a>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu 3*/}
                {/*end::Menu*/}
              </div>
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="p-0 card-body">
              {/*begin::Chart*/}
              <div className="mixed-widget-2-chart card-rounded-bottom bg-danger" data-kt-color="danger" style={{height: 200}} />
              {/*end::Chart*/}
              {/*begin::Stats*/}
              <div className="card-p mt-n20 position-relative">
                {/*begin::Row*/}
                <div className="row g-0">
                  {/*begin::Col*/}
                  <div className="px-6 py-8 col bg-light-warning rounded-2 me-7 mb-7">
                    {/*begin::Svg Icon | path: icons/duotune/general/gen032.svg*/}
                    <span className="my-2 svg-icon svg-icon-3x svg-icon-warning d-block">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <rect x={8} y={9} width={3} height={10} rx="1.5" fill="currentColor" />
                        <rect opacity="0.5" x={13} y={5} width={3} height={14} rx="1.5" fill="currentColor" />
                        <rect x={18} y={11} width={3} height={8} rx="1.5" fill="currentColor" />
                        <rect x={3} y={13} width={3} height={6} rx="1.5" fill="currentColor" />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                    <a href="#" className="text-warning fw-bold fs-6">Weekly Sales</a>
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="px-6 py-8 col bg-light-primary rounded-2 mb-7">
                    {/*begin::Svg Icon | path: icons/duotune/finance/fin006.svg*/}
                    <span className="my-2 svg-icon svg-icon-3x svg-icon-primary d-block">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="currentColor" />
                        <path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="currentColor" />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                    <a href="#" className="text-primary fw-bold fs-6">New Projects</a>
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Row*/}
                {/*begin::Row*/}
                <div className="row g-0">
                  {/*begin::Col*/}
                  <div className="px-6 py-8 col bg-light-danger rounded-2 me-7">
                    {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                    <span className="my-2 svg-icon svg-icon-3x svg-icon-danger d-block">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor" />
                        <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor" />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                    <a href="#" className="mt-2 text-danger fw-bold fs-6">Item Orders</a>
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="px-6 py-8 col bg-light-success rounded-2">
                    {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
                    <span className="my-2 svg-icon svg-icon-3x svg-icon-success d-block">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z" fill="currentColor" />
                        <path opacity="0.3" d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z" fill="currentColor" />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                    <a href="#" className="mt-2 text-success fw-bold fs-6">Bug Reports</a>
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Row*/}
              </div>
              {/*end::Stats*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end::Mixed Widget 2*/}
        </div>
        {/*end::Col*/}
        {/*begin::Col*/}
        <div className="col-xl-4">
          {/*begin::List Widget 5*/}
          <div className="card card-xl-stretch">
            {/*begin::Header*/}
            <div className="mt-4 border-0 card-header align-items-center">
              <h3 className="card-title align-items-start flex-column">
                <span className="mb-2 fw-bolder text-dark">Activities</span>
                <span className="text-muted fw-bold fs-7">890,344 Sales</span>
              </h3>
              <div className="card-toolbar">
                {/*begin::Menu*/}
                <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                  {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                  <span className="svg-icon svg-icon-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <rect x={5} y={5} width={5} height={5} rx={1} fill="currentColor" />
                        <rect x={14} y={5} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                        <rect x={5} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                        <rect x={14} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                      </g>
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </button>
                {/*begin::Menu 1*/}
                <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_6244763d95a3a">
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
                        <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_6244763d95a3a" data-allow-clear="true">
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
                {/*end::Menu*/}
              </div>
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="pt-5 card-body">
              {/*begin::Timeline*/}
              <div className="timeline-label">
                {/*begin::Item*/}
                <div className="timeline-item">
                  {/*begin::Label*/}
                  <div className="text-gray-800 timeline-label fw-bolder fs-6">08:42</div>
                  {/*end::Label*/}
                  {/*begin::Badge*/}
                  <div className="timeline-badge">
                    <i className="fa fa-genderless text-warning fs-1" />
                  </div>
                  {/*end::Badge*/}
                  {/*begin::Text*/}
                  <div className="fw-mormal timeline-content text-muted ps-3">Outlines keep you honest. And keep structure</div>
                  {/*end::Text*/}
                </div>
                {/*end::Item*/}
                {/*begin::Item*/}
                <div className="timeline-item">
                  {/*begin::Label*/}
                  <div className="text-gray-800 timeline-label fw-bolder fs-6">10:00</div>
                  {/*end::Label*/}
                  {/*begin::Badge*/}
                  <div className="timeline-badge">
                    <i className="fa fa-genderless text-success fs-1" />
                  </div>
                  {/*end::Badge*/}
                  {/*begin::Content*/}
                  <div className="timeline-content d-flex">
                    <span className="text-gray-800 fw-bolder ps-3">AEOL meeting</span>
                  </div>
                  {/*end::Content*/}
                </div>
                {/*end::Item*/}
                {/*begin::Item*/}
                <div className="timeline-item">
                  {/*begin::Label*/}
                  <div className="text-gray-800 timeline-label fw-bolder fs-6">14:37</div>
                  {/*end::Label*/}
                  {/*begin::Badge*/}
                  <div className="timeline-badge">
                    <i className="fa fa-genderless text-danger fs-1" />
                  </div>
                  {/*end::Badge*/}
                  {/*begin::Desc*/}
                  <div className="text-gray-800 timeline-content fw-bolder ps-3">Make deposit
                    <a href="#" className="text-primary">USD 700</a>. to ESL</div>
                  {/*end::Desc*/}
                </div>
                {/*end::Item*/}
                {/*begin::Item*/}
                <div className="timeline-item">
                  {/*begin::Label*/}
                  <div className="text-gray-800 timeline-label fw-bolder fs-6">16:50</div>
                  {/*end::Label*/}
                  {/*begin::Badge*/}
                  <div className="timeline-badge">
                    <i className="fa fa-genderless text-primary fs-1" />
                  </div>
                  {/*end::Badge*/}
                  {/*begin::Text*/}
                  <div className="timeline-content fw-mormal text-muted ps-3">Indulging in poorly driving and keep structure keep great</div>
                  {/*end::Text*/}
                </div>
                {/*end::Item*/}
                {/*begin::Item*/}
                <div className="timeline-item">
                  {/*begin::Label*/}
                  <div className="text-gray-800 timeline-label fw-bolder fs-6">21:03</div>
                  {/*end::Label*/}
                  {/*begin::Badge*/}
                  <div className="timeline-badge">
                    <i className="fa fa-genderless text-danger fs-1" />
                  </div>
                  {/*end::Badge*/}
                  {/*begin::Desc*/}
                  <div className="text-gray-800 timeline-content fw-bold ps-3">New order placed
                    <a href="#" className="text-primary">#XF-2356</a>.</div>
                  {/*end::Desc*/}
                </div>
                {/*end::Item*/}
                {/*begin::Item*/}
                <div className="timeline-item">
                  {/*begin::Label*/}
                  <div className="text-gray-800 timeline-label fw-bolder fs-6">16:50</div>
                  {/*end::Label*/}
                  {/*begin::Badge*/}
                  <div className="timeline-badge">
                    <i className="fa fa-genderless text-primary fs-1" />
                  </div>
                  {/*end::Badge*/}
                  {/*begin::Text*/}
                  <div className="timeline-content fw-mormal text-muted ps-3">Indulging in poorly driving and keep structure keep great</div>
                  {/*end::Text*/}
                </div>
                {/*end::Item*/}
                {/*begin::Item*/}
                <div className="timeline-item">
                  {/*begin::Label*/}
                  <div className="text-gray-800 timeline-label fw-bolder fs-6">21:03</div>
                  {/*end::Label*/}
                  {/*begin::Badge*/}
                  <div className="timeline-badge">
                    <i className="fa fa-genderless text-danger fs-1" />
                  </div>
                  {/*end::Badge*/}
                  {/*begin::Desc*/}
                  <div className="text-gray-800 timeline-content fw-bold ps-3">New order placed
                    <a href="#" className="text-primary">#XF-2356</a>.</div>
                  {/*end::Desc*/}
                </div>
                {/*end::Item*/}
                {/*begin::Item*/}
                <div className="timeline-item mb-9">
                  {/*begin::Label*/}
                  <div className="text-gray-800 timeline-label fw-bolder fs-6">10:30</div>
                  {/*end::Label*/}
                  {/*begin::Badge*/}
                  <div className="timeline-badge">
                    <i className="fa fa-genderless text-success fs-1" />
                  </div>
                  {/*end::Badge*/}
                  {/*begin::Text*/}
                  <div className="timeline-content fw-mormal text-muted ps-3">Finance KPI Mobile app launch preparion meeting</div>
                  {/*end::Text*/}
                </div>
                {/*end::Item*/}
              </div>
              {/*end::Timeline*/}
            </div>
            {/*end: Card Body*/}
          </div>
          {/*end: List Widget 5*/}
        </div>
        {/*end::Col*/}
        {/*begin::Col*/}
        <div className="col-xl-4">
          {/*begin::Mixed Widget 7*/}
          <div className="mb-5 card card-xl-stretch-50 mb-xl-8">
            {/*begin::Body*/}
            <div className="p-0 card-body d-flex flex-column">
              {/*begin::Stats*/}
              <div className="pb-0 flex-grow-1 card-p">
                <div className="flex-wrap d-flex flex-stack">
                  <div className="me-2">
                    <a href="#" className="text-dark text-hover-primary fw-bolder fs-3">Generate Reports</a>
                    <div className="text-muted fs-7 fw-bold">Finance and accounting reports</div>
                  </div>
                  <div className="fw-bolder fs-3 text-primary">$24,500</div>
                </div>
              </div>
              {/*end::Stats*/}
              {/*begin::Chart*/}
              <div className="mixed-widget-7-chart card-rounded-bottom" data-kt-chart-color="primary" style={{height: 150}} />
              {/*end::Chart*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end::Mixed Widget 7*/}
          {/*begin::Mixed Widget 10*/}
          <div className="mb-5 card card-xl-stretch-50 mb-xl-8">
            {/*begin::Body*/}
            <div className="p-0 overflow-hidden card-body d-flex justify-content-between flex-column">
              {/*begin::Hidden*/}
              <div className="flex-wrap pb-3 d-flex flex-stack flex-grow-1 px-9 pt-9">
                <div className="me-2">
                  <span className="text-gray-800 fw-bolder d-block fs-3">Sales</span>
                  <span className="text-gray-400 fw-bold">Oct 8 - Oct 26 22</span>
                </div>
                <div className="fw-bolder fs-3 text-primary">$15,300</div>
              </div>
              {/*end::Hidden*/}
              {/*begin::Chart*/}
              <div className="mixed-widget-10-chart" data-kt-color="primary" style={{height: 175}} />
              {/*end::Chart*/}
            </div>
          </div>
          {/*end::Mixed Widget 10*/}
        </div>
        {/*end::Col*/}
      </div>
      {/*end::Row*/}
      {/*begin::Row*/}
      <div className="row gy-5 g-xl-8">
        {/*begin::Col*/}
        <div className="col-xl-4">
          {/*begin::List Widget 3*/}
          <div className="card card-xl-stretch mb-xl-8">
            {/*begin::Header*/}
            <div className="border-0 card-header">
              <h3 className="card-title fw-bolder text-dark">Todo</h3>
              <div className="card-toolbar">
                {/*begin::Menu*/}
                <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                  {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                  <span className="svg-icon svg-icon-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <rect x={5} y={5} width={5} height={5} rx={1} fill="currentColor" />
                        <rect x={14} y={5} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                        <rect x={5} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                        <rect x={14} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                      </g>
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </button>
                {/*begin::Menu 3*/}
                <div className="py-3 menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px" data-kt-menu="true">
                  {/*begin::Heading*/}
                  <div className="px-3 menu-item">
                    <div className="px-3 pb-2 menu-content text-muted fs-7 text-uppercase">Payments</div>
                  </div>
                  {/*end::Heading*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item">
                    <a href="#" className="px-3 menu-link">Create Invoice</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item">
                    <a href="#" className="px-3 menu-link flex-stack">Create Payment
                      <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference" /></a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item">
                    <a href="#" className="px-3 menu-link">Generate Bill</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                    <a href="#" className="px-3 menu-link">
                      <span className="menu-title">Subscription</span>
                      <span className="menu-arrow" />
                    </a>
                    {/*begin::Menu sub*/}
                    <div className="py-4 menu-sub menu-sub-dropdown w-175px">
                      {/*begin::Menu item*/}
                      <div className="px-3 menu-item">
                        <a href="#" className="px-3 menu-link">Plans</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="px-3 menu-item">
                        <a href="#" className="px-3 menu-link">Billing</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="px-3 menu-item">
                        <a href="#" className="px-3 menu-link">Statements</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="my-2 separator" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="px-3 menu-item">
                        <div className="px-3 menu-content">
                          {/*begin::Switch*/}
                          <label className="form-check form-switch form-check-custom form-check-solid">
                            {/*begin::Input*/}
                            <input className="form-check-input w-30px h-20px" type="checkbox" defaultValue={1} defaultChecked="checked" name="notifications" />
                            {/*end::Input*/}
                            {/*end::Label*/}
                            <span className="form-check-label text-muted fs-6">Recuring</span>
                            {/*end::Label*/}
                          </label>
                          {/*end::Switch*/}
                        </div>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu sub*/}
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 my-1 menu-item">
                    <a href="#" className="px-3 menu-link">Settings</a>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu 3*/}
                {/*end::Menu*/}
              </div>
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="pt-2 card-body">
              {/*begin::Item*/}
              <div className="mb-8 d-flex align-items-center">
                {/*begin::Bullet*/}
                <span className="bullet bullet-vertical h-40px bg-success" />
                {/*end::Bullet*/}
                {/*begin::Checkbox*/}
                <div className="mx-5 form-check form-check-custom form-check-solid">
                  <input className="form-check-input" type="checkbox" defaultValue />
                </div>
                {/*end::Checkbox*/}
                {/*begin::Description*/}
                <div className="flex-grow-1">
                  <a href="#" className="text-gray-800 text-hover-primary fw-bolder fs-6">Create FireStone Logo</a>
                  <span className="text-muted fw-bold d-block">Due in 2 Days</span>
                </div>
                {/*end::Description*/}
                <span className="badge badge-light-success fs-8 fw-bolder">New</span>
              </div>
              {/*end:Item*/}
              {/*begin::Item*/}
              <div className="mb-8 d-flex align-items-center">
                {/*begin::Bullet*/}
                <span className="bullet bullet-vertical h-40px bg-primary" />
                {/*end::Bullet*/}
                {/*begin::Checkbox*/}
                <div className="mx-5 form-check form-check-custom form-check-solid">
                  <input className="form-check-input" type="checkbox" defaultValue />
                </div>
                {/*end::Checkbox*/}
                {/*begin::Description*/}
                <div className="flex-grow-1">
                  <a href="#" className="text-gray-800 text-hover-primary fw-bolder fs-6">Stakeholder Meeting</a>
                  <span className="text-muted fw-bold d-block">Due in 3 Days</span>
                </div>
                {/*end::Description*/}
                <span className="badge badge-light-primary fs-8 fw-bolder">New</span>
              </div>
              {/*end:Item*/}
              {/*begin::Item*/}
              <div className="mb-8 d-flex align-items-center">
                {/*begin::Bullet*/}
                <span className="bullet bullet-vertical h-40px bg-warning" />
                {/*end::Bullet*/}
                {/*begin::Checkbox*/}
                <div className="mx-5 form-check form-check-custom form-check-solid">
                  <input className="form-check-input" type="checkbox" defaultValue />
                </div>
                {/*end::Checkbox*/}
                {/*begin::Description*/}
                <div className="flex-grow-1">
                  <a href="#" className="text-gray-800 text-hover-primary fw-bolder fs-6">Scoping &amp; Estimations</a>
                  <span className="text-muted fw-bold d-block">Due in 5 Days</span>
                </div>
                {/*end::Description*/}
                <span className="badge badge-light-warning fs-8 fw-bolder">New</span>
              </div>
              {/*end:Item*/}
              {/*begin::Item*/}
              <div className="mb-8 d-flex align-items-center">
                {/*begin::Bullet*/}
                <span className="bullet bullet-vertical h-40px bg-primary" />
                {/*end::Bullet*/}
                {/*begin::Checkbox*/}
                <div className="mx-5 form-check form-check-custom form-check-solid">
                  <input className="form-check-input" type="checkbox" defaultValue />
                </div>
                {/*end::Checkbox*/}
                {/*begin::Description*/}
                <div className="flex-grow-1">
                  <a href="#" className="text-gray-800 text-hover-primary fw-bolder fs-6">KPI App Showcase</a>
                  <span className="text-muted fw-bold d-block">Due in 2 Days</span>
                </div>
                {/*end::Description*/}
                <span className="badge badge-light-primary fs-8 fw-bolder">New</span>
              </div>
              {/*end:Item*/}
              {/*begin::Item*/}
              <div className="mb-8 d-flex align-items-center">
                {/*begin::Bullet*/}
                <span className="bullet bullet-vertical h-40px bg-danger" />
                {/*end::Bullet*/}
                {/*begin::Checkbox*/}
                <div className="mx-5 form-check form-check-custom form-check-solid">
                  <input className="form-check-input" type="checkbox" defaultValue />
                </div>
                {/*end::Checkbox*/}
                {/*begin::Description*/}
                <div className="flex-grow-1">
                  <a href="#" className="text-gray-800 text-hover-primary fw-bolder fs-6">Project Meeting</a>
                  <span className="text-muted fw-bold d-block">Due in 12 Days</span>
                </div>
                {/*end::Description*/}
                <span className="badge badge-light-danger fs-8 fw-bolder">New</span>
              </div>
              {/*end:Item*/}
              {/*begin::Item*/}
              <div className="d-flex align-items-center">
                {/*begin::Bullet*/}
                <span className="bullet bullet-vertical h-40px bg-success" />
                {/*end::Bullet*/}
                {/*begin::Checkbox*/}
                <div className="mx-5 form-check form-check-custom form-check-solid">
                  <input className="form-check-input" type="checkbox" defaultValue />
                </div>
                {/*end::Checkbox*/}
                {/*begin::Description*/}
                <div className="flex-grow-1">
                  <a href="#" className="text-gray-800 text-hover-primary fw-bolder fs-6">Customers Update</a>
                  <span className="text-muted fw-bold d-block">Due in 1 week</span>
                </div>
                {/*end::Description*/}
                <span className="badge badge-light-success fs-8 fw-bolder">New</span>
              </div>
              {/*end:Item*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end:List Widget 3*/}
        </div>
        {/*end::Col*/}
        {/*begin::Col*/}
        <div className="col-xl-8">
          {/*begin::Tables Widget 9*/}
          <div className="mb-5 card card-xl-stretch mb-xl-8">
            {/*begin::Header*/}
            <div className="pt-5 border-0 card-header">
              <h3 className="card-title align-items-start flex-column">
                <span className="mb-1 card-label fw-bolder fs-3">Members Statistics</span>
                <span className="mt-1 text-muted fw-bold fs-7">Over 500 members</span>
              </h3>
              <div className="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add a user">
                <a href="#" className="btn btn-sm btn-light btn-active-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                  <span className="svg-icon svg-icon-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <rect opacity="0.5" x="11.364" y="20.364" width={16} height={2} rx={1} transform="rotate(-90 11.364 20.364)" fill="currentColor" />
                      <rect x="4.36396" y="11.364" width={16} height={2} rx={1} fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}New Member</a>
              </div>
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="py-3 card-body">
              {/*begin::Table container*/}
              <div className="table-responsive">
                {/*begin::Table*/}
                <table className="table align-middle table-row-dashed table-row-gray-300 gs-0 gy-4">
                  {/*begin::Table head*/}
                  <thead>
                    <tr className="fw-bolder text-muted">
                      <th className="w-25px">
                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                          <input className="form-check-input" type="checkbox" defaultValue={1} data-kt-check="true" data-kt-check-target=".widget-9-check" />
                        </div>
                      </th>
                      <th className="min-w-200px">Authors</th>
                      <th className="min-w-150px">Company</th>
                      <th className="min-w-150px">Progress</th>
                      <th className="min-w-100px text-end">Actions</th>
                    </tr>
                  </thead>
                  {/*end::Table head*/}
                  {/*begin::Table body*/}
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                          <input className="form-check-input widget-9-check" type="checkbox" defaultValue={1} />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-45px me-5">
                            <img src="assets/media/avatars/300-14.jpg" alt />
                          </div>
                          <div className="d-flex justify-content-start flex-column">
                            <a href="#" className="text-dark fw-bolder text-hover-primary fs-6">Ana Simmons</a>
                            <span className="text-muted fw-bold d-block fs-7">HTML, JS, ReactJS</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <a href="#" className="text-dark fw-bolder text-hover-primary d-block fs-6">Intertico</a>
                        <span className="text-muted fw-bold d-block fs-7">Web, UI/UX Design</span>
                      </td>
                      <td className="text-end">
                        <div className="d-flex flex-column w-100 me-2">
                          <div className="mb-2 d-flex flex-stack">
                            <span className="text-muted me-2 fs-7 fw-bold">50%</span>
                          </div>
                          <div className="progress h-6px w-100">
                            <div className="progress-bar bg-primary" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex-shrink-0 d-flex justify-content-end">
                          <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                            {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                            <span className="svg-icon svg-icon-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </a>
                          <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                            {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                            <span className="svg-icon svg-icon-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </a>
                          <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                            {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                            <span className="svg-icon svg-icon-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                          <input className="form-check-input widget-9-check" type="checkbox" defaultValue={1} />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-45px me-5">
                            <img src="assets/media/avatars/300-2.jpg" alt />
                          </div>
                          <div className="d-flex justify-content-start flex-column">
                            <a href="#" className="text-dark fw-bolder text-hover-primary fs-6">Jessie Clarcson</a>
                            <span className="text-muted fw-bold d-block fs-7">C#, ASP.NET, MS SQL</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <a href="#" className="text-dark fw-bolder text-hover-primary d-block fs-6">Agoda</a>
                        <span className="text-muted fw-bold d-block fs-7">Houses &amp; Hotels</span>
                      </td>
                      <td className="text-end">
                        <div className="d-flex flex-column w-100 me-2">
                          <div className="mb-2 d-flex flex-stack">
                            <span className="text-muted me-2 fs-7 fw-bold">70%</span>
                          </div>
                          <div className="progress h-6px w-100">
                            <div className="progress-bar bg-danger" role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex-shrink-0 d-flex justify-content-end">
                          <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                            {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                            <span className="svg-icon svg-icon-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </a>
                          <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                            {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                            <span className="svg-icon svg-icon-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </a>
                          <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                            {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                            <span className="svg-icon svg-icon-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                          <input className="form-check-input widget-9-check" type="checkbox" defaultValue={1} />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-45px me-5">
                            <img src="assets/media/avatars/300-5.jpg" alt />
                          </div>
                          <div className="d-flex justify-content-start flex-column">
                            <a href="#" className="text-dark fw-bolder text-hover-primary fs-6">Lebron Wayde</a>
                            <span className="text-muted fw-bold d-block fs-7">PHP, Laravel, VueJS</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <a href="#" className="text-dark fw-bolder text-hover-primary d-block fs-6">RoadGee</a>
                        <span className="text-muted fw-bold d-block fs-7">Transportation</span>
                      </td>
                      <td className="text-end">
                        <div className="d-flex flex-column w-100 me-2">
                          <div className="mb-2 d-flex flex-stack">
                            <span className="text-muted me-2 fs-7 fw-bold">60%</span>
                          </div>
                          <div className="progress h-6px w-100">
                            <div className="progress-bar bg-success" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex-shrink-0 d-flex justify-content-end">
                          <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                            {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                            <span className="svg-icon svg-icon-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </a>
                          <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                            {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                            <span className="svg-icon svg-icon-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </a>
                          <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                            {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                            <span className="svg-icon svg-icon-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                          <input className="form-check-input widget-9-check" type="checkbox" defaultValue={1} />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-45px me-5">
                            <img src="assets/media/avatars/300-20.jpg" alt />
                          </div>
                          <div className="d-flex justify-content-start flex-column">
                            <a href="#" className="text-dark fw-bolder text-hover-primary fs-6">Natali Goodwin</a>
                            <span className="text-muted fw-bold d-block fs-7">Python, PostgreSQL, ReactJS</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <a href="#" className="text-dark fw-bolder text-hover-primary d-block fs-6">The Hill</a>
                        <span className="text-muted fw-bold d-block fs-7">Insurance</span>
                      </td>
                      <td className="text-end">
                        <div className="d-flex flex-column w-100 me-2">
                          <div className="mb-2 d-flex flex-stack">
                            <span className="text-muted me-2 fs-7 fw-bold">50%</span>
                          </div>
                          <div className="progress h-6px w-100">
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex-shrink-0 d-flex justify-content-end">
                          <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                            {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                            <span className="svg-icon svg-icon-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </a>
                          <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                            {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                            <span className="svg-icon svg-icon-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </a>
                          <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                            {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                            <span className="svg-icon svg-icon-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                          <input className="form-check-input widget-9-check" type="checkbox" defaultValue={1} />
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-45px me-5">
                            <img src="assets/media/avatars/300-23.jpg" alt />
                          </div>
                          <div className="d-flex justify-content-start flex-column">
                            <a href="#" className="text-dark fw-bolder text-hover-primary fs-6">Kevin Leonard</a>
                            <span className="text-muted fw-bold d-block fs-7">HTML, JS, ReactJS</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <a href="#" className="text-dark fw-bolder text-hover-primary d-block fs-6">RoadGee</a>
                        <span className="text-muted fw-bold d-block fs-7">Art Director</span>
                      </td>
                      <td className="text-end">
                        <div className="d-flex flex-column w-100 me-2">
                          <div className="mb-2 d-flex flex-stack">
                            <span className="text-muted me-2 fs-7 fw-bold">90%</span>
                          </div>
                          <div className="progress h-6px w-100">
                            <div className="progress-bar bg-info" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex-shrink-0 d-flex justify-content-end">
                          <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                            {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                            <span className="svg-icon svg-icon-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </a>
                          <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                            {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                            <span className="svg-icon svg-icon-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </a>
                          <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                            {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                            <span className="svg-icon svg-icon-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  {/*end::Table body*/}
                </table>
                {/*end::Table*/}
              </div>
              {/*end::Table container*/}
            </div>
            {/*begin::Body*/}
          </div>
          {/*end::Tables Widget 9*/}
        </div>
        {/*end::Col*/}
      </div>
      {/*end::Row*/}
      {/*begin::Row*/}
      <div className="row gy-5 g-xl-8">
        {/*begin::Col*/}
        <div className="col-xl-4">
          {/*begin::List Widget 2*/}
          <div className="card card-xl-stretch mb-xl-8">
            {/*begin::Header*/}
            <div className="border-0 card-header">
              <h3 className="card-title fw-bolder text-dark">Authors</h3>
              <div className="card-toolbar">
                {/*begin::Menu*/}
                <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                  {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                  <span className="svg-icon svg-icon-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <rect x={5} y={5} width={5} height={5} rx={1} fill="currentColor" />
                        <rect x={14} y={5} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                        <rect x={5} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                        <rect x={14} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                      </g>
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </button>
                {/*begin::Menu 2*/}
                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px" data-kt-menu="true">
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item">
                    <div className="px-3 py-4 menu-content fs-6 text-dark fw-bolder">Quick Actions</div>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="mb-3 opacity-75 separator" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item">
                    <a href="#" className="px-3 menu-link">New Ticket</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item">
                    <a href="#" className="px-3 menu-link">New Customer</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                    {/*begin::Menu item*/}
                    <a href="#" className="px-3 menu-link">
                      <span className="menu-title">New Group</span>
                      <span className="menu-arrow" />
                    </a>
                    {/*end::Menu item*/}
                    {/*begin::Menu sub*/}
                    <div className="py-4 menu-sub menu-sub-dropdown w-175px">
                      {/*begin::Menu item*/}
                      <div className="px-3 menu-item">
                        <a href="#" className="px-3 menu-link">Admin Group</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="px-3 menu-item">
                        <a href="#" className="px-3 menu-link">Staff Group</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="px-3 menu-item">
                        <a href="#" className="px-3 menu-link">Member Group</a>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu sub*/}
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item">
                    <a href="#" className="px-3 menu-link">New Contact</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="mt-3 opacity-75 separator" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item">
                    <div className="px-3 py-3 menu-content">
                      <a className="px-4 btn btn-primary btn-sm" href="#">Generate Reports</a>
                    </div>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu 2*/}
                {/*end::Menu*/}
              </div>
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="pt-2 card-body">
              {/*begin::Item*/}
              <div className="d-flex align-items-center mb-7">
                {/*begin::Avatar*/}
                <div className="symbol symbol-50px me-5">
                  <img src="assets/media/avatars/300-6.jpg" className alt />
                </div>
                {/*end::Avatar*/}
                {/*begin::Text*/}
                <div className="flex-grow-1">
                  <a href="#" className="text-dark fw-bolder text-hover-primary fs-6">Emma Smith</a>
                  <span className="text-muted d-block fw-bold">Project Manager</span>
                </div>
                {/*end::Text*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="d-flex align-items-center mb-7">
                {/*begin::Avatar*/}
                <div className="symbol symbol-50px me-5">
                  <img src="assets/media/avatars/300-5.jpg" className alt />
                </div>
                {/*end::Avatar*/}
                {/*begin::Text*/}
                <div className="flex-grow-1">
                  <a href="#" className="text-dark fw-bolder text-hover-primary fs-6">Sean Bean</a>
                  <span className="text-muted d-block fw-bold">PHP, SQLite, Artisan CLI</span>
                </div>
                {/*end::Text*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="d-flex align-items-center mb-7">
                {/*begin::Avatar*/}
                <div className="symbol symbol-50px me-5">
                  <img src="assets/media/avatars/300-11.jpg" className alt />
                </div>
                {/*end::Avatar*/}
                {/*begin::Text*/}
                <div className="flex-grow-1">
                  <a href="#" className="text-dark fw-bolder text-hover-primary fs-6">Brian Cox</a>
                  <span className="text-muted d-block fw-bold">PHP, SQLite, Artisan CLI</span>
                </div>
                {/*end::Text*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="d-flex align-items-center mb-7">
                {/*begin::Avatar*/}
                <div className="symbol symbol-50px me-5">
                  <img src="assets/media/avatars/300-9.jpg" className alt />
                </div>
                {/*end::Avatar*/}
                {/*begin::Text*/}
                <div className="flex-grow-1">
                  <a href="#" className="text-dark fw-bolder text-hover-primary fs-6">Francis Mitcham</a>
                  <span className="text-muted d-block fw-bold">PHP, SQLite, Artisan CLI</span>
                </div>
                {/*end::Text*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="d-flex align-items-center">
                {/*begin::Avatar*/}
                <div className="symbol symbol-50px me-5">
                  <img src="assets/media/avatars/300-23.jpg" className alt />
                </div>
                {/*end::Avatar*/}
                {/*begin::Text*/}
                <div className="flex-grow-1">
                  <a href="#" className="text-dark fw-bolder text-hover-primary fs-6">Dan Wilson</a>
                  <span className="text-muted d-block fw-bold">PHP, SQLite, Artisan CLI</span>
                </div>
                {/*end::Text*/}
              </div>
              {/*end::Item*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end::List Widget 2*/}
        </div>
        {/*end::Col*/}
        {/*begin::Col*/}
        <div className="col-xl-4">
          {/*begin::List Widget 6*/}
          <div className="card card-xl-stretch mb-xl-8">
            {/*begin::Header*/}
            <div className="border-0 card-header">
              <h3 className="card-title fw-bolder text-dark">Notifications</h3>
              <div className="card-toolbar">
                {/*begin::Menu*/}
                <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                  {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                  <span className="svg-icon svg-icon-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <rect x={5} y={5} width={5} height={5} rx={1} fill="currentColor" />
                        <rect x={14} y={5} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                        <rect x={5} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                        <rect x={14} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                      </g>
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </button>
                {/*begin::Menu 3*/}
                <div className="py-3 menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px" data-kt-menu="true">
                  {/*begin::Heading*/}
                  <div className="px-3 menu-item">
                    <div className="px-3 pb-2 menu-content text-muted fs-7 text-uppercase">Payments</div>
                  </div>
                  {/*end::Heading*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item">
                    <a href="#" className="px-3 menu-link">Create Invoice</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item">
                    <a href="#" className="px-3 menu-link flex-stack">Create Payment
                      <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference" /></a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item">
                    <a href="#" className="px-3 menu-link">Generate Bill</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                    <a href="#" className="px-3 menu-link">
                      <span className="menu-title">Subscription</span>
                      <span className="menu-arrow" />
                    </a>
                    {/*begin::Menu sub*/}
                    <div className="py-4 menu-sub menu-sub-dropdown w-175px">
                      {/*begin::Menu item*/}
                      <div className="px-3 menu-item">
                        <a href="#" className="px-3 menu-link">Plans</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="px-3 menu-item">
                        <a href="#" className="px-3 menu-link">Billing</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="px-3 menu-item">
                        <a href="#" className="px-3 menu-link">Statements</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="my-2 separator" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="px-3 menu-item">
                        <div className="px-3 menu-content">
                          {/*begin::Switch*/}
                          <label className="form-check form-switch form-check-custom form-check-solid">
                            {/*begin::Input*/}
                            <input className="form-check-input w-30px h-20px" type="checkbox" defaultValue={1} defaultChecked="checked" name="notifications" />
                            {/*end::Input*/}
                            {/*end::Label*/}
                            <span className="form-check-label text-muted fs-6">Recuring</span>
                            {/*end::Label*/}
                          </label>
                          {/*end::Switch*/}
                        </div>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu sub*/}
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 my-1 menu-item">
                    <a href="#" className="px-3 menu-link">Settings</a>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu 3*/}
                {/*end::Menu*/}
              </div>
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="pt-0 card-body">
              {/*begin::Item*/}
              <div className="p-5 rounded d-flex align-items-center bg-light-warning mb-7">
                {/*begin::Icon*/}
                <span className="svg-icon svg-icon-warning me-5">
                  {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                  <span className="svg-icon svg-icon-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor" />
                      <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </span>
                {/*end::Icon*/}
                {/*begin::Title*/}
                <div className="flex-grow-1 me-2">
                  <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">Group lunch celebration</a>
                  <span className="text-muted fw-bold d-block">Due in 2 Days</span>
                </div>
                {/*end::Title*/}
                {/*begin::Lable*/}
                <span className="py-1 fw-bolder text-warning">+28%</span>
                {/*end::Lable*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="p-5 rounded d-flex align-items-center bg-light-success mb-7">
                {/*begin::Icon*/}
                <span className="svg-icon svg-icon-success me-5">
                  {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                  <span className="svg-icon svg-icon-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor" />
                      <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </span>
                {/*end::Icon*/}
                {/*begin::Title*/}
                <div className="flex-grow-1 me-2">
                  <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">Navigation optimization</a>
                  <span className="text-muted fw-bold d-block">Due in 2 Days</span>
                </div>
                {/*end::Title*/}
                {/*begin::Lable*/}
                <span className="py-1 fw-bolder text-success">+50%</span>
                {/*end::Lable*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="p-5 rounded d-flex align-items-center bg-light-danger mb-7">
                {/*begin::Icon*/}
                <span className="svg-icon svg-icon-danger me-5">
                  {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                  <span className="svg-icon svg-icon-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor" />
                      <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </span>
                {/*end::Icon*/}
                {/*begin::Title*/}
                <div className="flex-grow-1 me-2">
                  <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">Rebrand strategy planning</a>
                  <span className="text-muted fw-bold d-block">Due in 5 Days</span>
                </div>
                {/*end::Title*/}
                {/*begin::Lable*/}
                <span className="py-1 fw-bolder text-danger">-27%</span>
                {/*end::Lable*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="p-5 rounded d-flex align-items-center bg-light-info">
                {/*begin::Icon*/}
                <span className="svg-icon svg-icon-info me-5">
                  {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                  <span className="svg-icon svg-icon-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor" />
                      <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </span>
                {/*end::Icon*/}
                {/*begin::Title*/}
                <div className="flex-grow-1 me-2">
                  <a href="#" className="text-gray-800 fw-bolder text-hover-primary fs-6">Product goals strategy</a>
                  <span className="text-muted fw-bold d-block">Due in 7 Days</span>
                </div>
                {/*end::Title*/}
                {/*begin::Lable*/}
                <span className="py-1 fw-bolder text-info">+8%</span>
                {/*end::Lable*/}
              </div>
              {/*end::Item*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end::List Widget 6*/}
        </div>
        {/*end::Col*/}
        {/*begin::Col*/}
        <div className="col-xl-4">
          {/*begin::List Widget 4*/}
          <div className="mb-5 card card-xl-stretch mb-xl-8">
            {/*begin::Header*/}
            <div className="pt-5 border-0 card-header">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bolder text-dark">Trends</span>
                <span className="mt-1 text-muted fw-bold fs-7">Latest tech trends</span>
              </h3>
              <div className="card-toolbar">
                {/*begin::Menu*/}
                <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                  {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                  <span className="svg-icon svg-icon-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <rect x={5} y={5} width={5} height={5} rx={1} fill="currentColor" />
                        <rect x={14} y={5} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                        <rect x={5} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                        <rect x={14} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                      </g>
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </button>
                {/*begin::Menu 3*/}
                <div className="py-3 menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px" data-kt-menu="true">
                  {/*begin::Heading*/}
                  <div className="px-3 menu-item">
                    <div className="px-3 pb-2 menu-content text-muted fs-7 text-uppercase">Payments</div>
                  </div>
                  {/*end::Heading*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item">
                    <a href="#" className="px-3 menu-link">Create Invoice</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item">
                    <a href="#" className="px-3 menu-link flex-stack">Create Payment
                      <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference" /></a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item">
                    <a href="#" className="px-3 menu-link">Generate Bill</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                    <a href="#" className="px-3 menu-link">
                      <span className="menu-title">Subscription</span>
                      <span className="menu-arrow" />
                    </a>
                    {/*begin::Menu sub*/}
                    <div className="py-4 menu-sub menu-sub-dropdown w-175px">
                      {/*begin::Menu item*/}
                      <div className="px-3 menu-item">
                        <a href="#" className="px-3 menu-link">Plans</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="px-3 menu-item">
                        <a href="#" className="px-3 menu-link">Billing</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="px-3 menu-item">
                        <a href="#" className="px-3 menu-link">Statements</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="my-2 separator" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="px-3 menu-item">
                        <div className="px-3 menu-content">
                          {/*begin::Switch*/}
                          <label className="form-check form-switch form-check-custom form-check-solid">
                            {/*begin::Input*/}
                            <input className="form-check-input w-30px h-20px" type="checkbox" defaultValue={1} defaultChecked="checked" name="notifications" />
                            {/*end::Input*/}
                            {/*end::Label*/}
                            <span className="form-check-label text-muted fs-6">Recuring</span>
                            {/*end::Label*/}
                          </label>
                          {/*end::Switch*/}
                        </div>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu sub*/}
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 my-1 menu-item">
                    <a href="#" className="px-3 menu-link">Settings</a>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu 3*/}
                {/*end::Menu*/}
              </div>
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="pt-5 card-body">
              {/*begin::Item*/}
              <div className="d-flex align-items-sm-center mb-7">
                {/*begin::Symbol*/}
                <div className="symbol symbol-50px me-5">
                  <span className="symbol-label">
                    <img src="assets/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt />
                  </span>
                </div>
                {/*end::Symbol*/}
                {/*begin::Section*/}
                <div className="flex-wrap d-flex align-items-center flex-row-fluid">
                  <div className="flex-grow-1 me-2">
                    <a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bolder">Top Authors</a>
                    <span className="text-muted fw-bold d-block fs-7">Mark, Rowling, Esther</span>
                  </div>
                  <span className="my-2 badge badge-light fw-bolder">+82$</span>
                </div>
                {/*end::Section*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="d-flex align-items-sm-center mb-7">
                {/*begin::Symbol*/}
                <div className="symbol symbol-50px me-5">
                  <span className="symbol-label">
                    <img src="assets/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt />
                  </span>
                </div>
                {/*end::Symbol*/}
                {/*begin::Section*/}
                <div className="flex-wrap d-flex align-items-center flex-row-fluid">
                  <div className="flex-grow-1 me-2">
                    <a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bolder">Popular Authors</a>
                    <span className="text-muted fw-bold d-block fs-7">Randy, Steve, Mike</span>
                  </div>
                  <span className="my-2 badge badge-light fw-bolder">+280$</span>
                </div>
                {/*end::Section*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="d-flex align-items-sm-center mb-7">
                {/*begin::Symbol*/}
                <div className="symbol symbol-50px me-5">
                  <span className="symbol-label">
                    <img src="assets/media/svg/brand-logos/vimeo.svg" className="h-50 align-self-center" alt />
                  </span>
                </div>
                {/*end::Symbol*/}
                {/*begin::Section*/}
                <div className="flex-wrap d-flex align-items-center flex-row-fluid">
                  <div className="flex-grow-1 me-2">
                    <a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bolder">New Users</a>
                    <span className="text-muted fw-bold d-block fs-7">John, Pat, Jimmy</span>
                  </div>
                  <span className="my-2 badge badge-light fw-bolder">+4500$</span>
                </div>
                {/*end::Section*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="d-flex align-items-sm-center mb-7">
                {/*begin::Symbol*/}
                <div className="symbol symbol-50px me-5">
                  <span className="symbol-label">
                    <img src="assets/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt />
                  </span>
                </div>
                {/*end::Symbol*/}
                {/*begin::Section*/}
                <div className="flex-wrap d-flex align-items-center flex-row-fluid">
                  <div className="flex-grow-1 me-2">
                    <a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bolder">Active Customers</a>
                    <span className="text-muted fw-bold d-block fs-7">Mark, Rowling, Esther</span>
                  </div>
                  <span className="my-2 badge badge-light fw-bolder">+686$</span>
                </div>
                {/*end::Section*/}
              </div>
              {/*end::Item*/}
              {/*begin::Item*/}
              <div className="d-flex align-items-sm-center mb-7">
                {/*begin::Symbol*/}
                <div className="symbol symbol-50px me-5">
                  <span className="symbol-label">
                    <img src="assets/media/svg/brand-logos/kickstarter.svg" className="h-50 align-self-center" alt />
                  </span>
                </div>
                {/*end::Symbol*/}
                {/*begin::Section*/}
                <div className="flex-wrap d-flex align-items-center flex-row-fluid">
                  <div className="flex-grow-1 me-2">
                    <a href="#" className="text-gray-800 text-hover-primary fs-6 fw-bolder">Bestseller Theme</a>
                    <span className="text-muted fw-bold d-block fs-7">Disco, Retro, Sports</span>
                  </div>
                  <span className="my-2 badge badge-light fw-bolder">+726$</span>
                </div>
                {/*end::Section*/}
              </div>
              {/*end::Item*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end::List Widget 4*/}
        </div>
        {/*end::Col*/}
      </div>
      {/*end::Row*/}
      {/*begin::Row*/}
      <div className="row g-5 g-xl-8">
        {/*begin::Col*/}
        <div className="col-xl-4">
          {/*begin::Mixed Widget 5*/}
          <div className="card card-xxl-stretch mb-xl-8">
            {/*begin::Beader*/}
            <div className="py-5 border-0 card-header">
              <h3 className="card-title align-items-start flex-column">
                <span className="mb-1 card-label fw-bolder fs-3">Trends</span>
                <span className="text-muted fw-bold fs-7">Latest trends</span>
              </h3>
              <div className="card-toolbar">
                {/*begin::Menu*/}
                <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                  {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                  <span className="svg-icon svg-icon-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <rect x={5} y={5} width={5} height={5} rx={1} fill="currentColor" />
                        <rect x={14} y={5} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                        <rect x={5} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                        <rect x={14} y={14} width={5} height={5} rx={1} fill="currentColor" opacity="0.3" />
                      </g>
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </button>
                {/*begin::Menu 3*/}
                <div className="py-3 menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px" data-kt-menu="true">
                  {/*begin::Heading*/}
                  <div className="px-3 menu-item">
                    <div className="px-3 pb-2 menu-content text-muted fs-7 text-uppercase">Payments</div>
                  </div>
                  {/*end::Heading*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item">
                    <a href="#" className="px-3 menu-link">Create Invoice</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item">
                    <a href="#" className="px-3 menu-link flex-stack">Create Payment
                      <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference" /></a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item">
                    <a href="#" className="px-3 menu-link">Generate Bill</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                    <a href="#" className="px-3 menu-link">
                      <span className="menu-title">Subscription</span>
                      <span className="menu-arrow" />
                    </a>
                    {/*begin::Menu sub*/}
                    <div className="py-4 menu-sub menu-sub-dropdown w-175px">
                      {/*begin::Menu item*/}
                      <div className="px-3 menu-item">
                        <a href="#" className="px-3 menu-link">Plans</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="px-3 menu-item">
                        <a href="#" className="px-3 menu-link">Billing</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="px-3 menu-item">
                        <a href="#" className="px-3 menu-link">Statements</a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="my-2 separator" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="px-3 menu-item">
                        <div className="px-3 menu-content">
                          {/*begin::Switch*/}
                          <label className="form-check form-switch form-check-custom form-check-solid">
                            {/*begin::Input*/}
                            <input className="form-check-input w-30px h-20px" type="checkbox" defaultValue={1} defaultChecked="checked" name="notifications" />
                            {/*end::Input*/}
                            {/*end::Label*/}
                            <span className="form-check-label text-muted fs-6">Recuring</span>
                            {/*end::Label*/}
                          </label>
                          {/*end::Switch*/}
                        </div>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu sub*/}
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 my-1 menu-item">
                    <a href="#" className="px-3 menu-link">Settings</a>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu 3*/}
                {/*end::Menu*/}
              </div>
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="card-body d-flex flex-column">
              {/*begin::Chart*/}
              <div className="mixed-widget-5-chart card-rounded-top" data-kt-chart-color="success" style={{height: 150}} />
              {/*end::Chart*/}
              {/*begin::Items*/}
              <div className="mt-5">
                {/*begin::Item*/}
                <div className="mb-5 d-flex flex-stack">
                  {/*begin::Section*/}
                  <div className="d-flex align-items-center me-2">
                    {/*begin::Symbol*/}
                    <div className="symbol symbol-50px me-3">
                      <div className="symbol-label bg-light">
                        <img src="assets/media/svg/brand-logos/plurk.svg" className="h-50" alt />
                      </div>
                    </div>
                    {/*end::Symbol*/}
                    {/*begin::Title*/}
                    <div>
                      <a href="#" className="text-gray-800 fs-6 text-hover-primary fw-bolder">Top Authors</a>
                      <div className="mt-1 fs-7 text-muted fw-bold">Ricky Hunt, Sandra Trepp</div>
                    </div>
                    {/*end::Title*/}
                  </div>
                  {/*end::Section*/}
                  {/*begin::Label*/}
                  <div className="px-3 py-4 badge badge-light fw-bold">+82$</div>
                  {/*end::Label*/}
                </div>
                {/*end::Item*/}
                {/*begin::Item*/}
                <div className="mb-5 d-flex flex-stack">
                  {/*begin::Section*/}
                  <div className="d-flex align-items-center me-2">
                    {/*begin::Symbol*/}
                    <div className="symbol symbol-50px me-3">
                      <div className="symbol-label bg-light">
                        <img src="assets/media/svg/brand-logos/figma-1.svg" className="h-50" alt />
                      </div>
                    </div>
                    {/*end::Symbol*/}
                    {/*begin::Title*/}
                    <div>
                      <a href="#" className="text-gray-800 fs-6 text-hover-primary fw-bolder">Top Sales</a>
                      <div className="mt-1 fs-7 text-muted fw-bold">PitStop Emails</div>
                    </div>
                    {/*end::Title*/}
                  </div>
                  {/*end::Section*/}
                  {/*begin::Label*/}
                  <div className="px-3 py-4 badge badge-light fw-bold">+82$</div>
                  {/*end::Label*/}
                </div>
                {/*end::Item*/}
                {/*begin::Item*/}
                <div className="d-flex flex-stack">
                  {/*begin::Section*/}
                  <div className="d-flex align-items-center me-2">
                    {/*begin::Symbol*/}
                    <div className="symbol symbol-50px me-3">
                      <div className="symbol-label bg-light">
                        <img src="assets/media/svg/brand-logos/vimeo.svg" className="h-50" alt />
                      </div>
                    </div>
                    {/*end::Symbol*/}
                    {/*begin::Title*/}
                    <div className="py-1">
                      <a href="#" className="text-gray-800 fs-6 text-hover-primary fw-bolder">Top Engagement</a>
                      <div className="mt-1 fs-7 text-muted fw-bold">KT.com</div>
                    </div>
                    {/*end::Title*/}
                  </div>
                  {/*end::Section*/}
                  {/*begin::Label*/}
                  <div className="px-3 py-4 badge badge-light fw-bold">+82$</div>
                  {/*end::Label*/}
                </div>
                {/*end::Item*/}
              </div>
              {/*end::Items*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end::Mixed Widget 5*/}
        </div>
        {/*end::Col*/}
        {/*begin::Col*/}
        <div className="col-xl-8">
          {/*begin::Tables Widget 5*/}
          <div className="mb-5 card card-xxl-stretch mb-xl-8">
            {/*begin::Header*/}
            <div className="pt-5 border-0 card-header">
              <h3 className="card-title align-items-start flex-column">
                <span className="mb-1 card-label fw-bolder fs-3">Latest Products</span>
                <span className="mt-1 text-muted fw-bold fs-7">More than 400 new products</span>
              </h3>
              <div className="card-toolbar">
                <ul className="nav">
                  <li className="nav-item">
                    <a className="px-4 nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bolder me-1 active" data-bs-toggle="tab" href="#kt_table_widget_5_tab_1">Month</a>
                  </li>
                  <li className="nav-item">
                    <a className="px-4 nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bolder me-1" data-bs-toggle="tab" href="#kt_table_widget_5_tab_2">Week</a>
                  </li>
                  <li className="nav-item">
                    <a className="px-4 nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bolder" data-bs-toggle="tab" href="#kt_table_widget_5_tab_3">Day</a>
                  </li>
                </ul>
              </div>
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="py-3 card-body">
              <div className="tab-content">
                {/*begin::Tap pane*/}
                <div className="tab-pane fade show active" id="kt_table_widget_5_tab_1">
                  {/*begin::Table container*/}
                  <div className="table-responsive">
                    {/*begin::Table*/}
                    <table className="table align-middle table-row-dashed table-row-gray-200 gs-0 gy-4">
                      {/*begin::Table head*/}
                      <thead>
                        <tr className="border-0">
                          <th className="p-0 w-50px" />
                          <th className="p-0 min-w-150px" />
                          <th className="p-0 min-w-140px" />
                          <th className="p-0 min-w-110px" />
                          <th className="p-0 min-w-50px" />
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody>
                        <tr>
                          <td>
                            <div className="symbol symbol-45px me-2">
                              <span className="symbol-label">
                                <img src="assets/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt />
                              </span>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="mb-1 text-dark fw-bolder text-hover-primary fs-6">Brad Simmons</a>
                            <span className="text-muted fw-bold d-block">Movie Creator</span>
                          </td>
                          <td className="text-end text-muted fw-bold">React, HTML</td>
                          <td className="text-end">
                            <span className="badge badge-light-success">Approved</span>
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                              <span className="svg-icon svg-icon-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                  <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="currentColor" />
                                  <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="symbol symbol-45px me-2">
                              <span className="symbol-label">
                                <img src="assets/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt />
                              </span>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="mb-1 text-dark fw-bolder text-hover-primary fs-6">Popular Authors</a>
                            <span className="text-muted fw-bold d-block">Most Successful</span>
                          </td>
                          <td className="text-end text-muted fw-bold">Python, MySQL</td>
                          <td className="text-end">
                            <span className="badge badge-light-warning">In Progress</span>
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                              <span className="svg-icon svg-icon-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                  <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="currentColor" />
                                  <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="symbol symbol-45px me-2">
                              <span className="symbol-label">
                                <img src="assets/media/svg/brand-logos/vimeo.svg" className="h-50 align-self-center" alt />
                              </span>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="mb-1 text-dark fw-bolder text-hover-primary fs-6">New Users</a>
                            <span className="text-muted fw-bold d-block">Awesome Users</span>
                          </td>
                          <td className="text-end text-muted fw-bold">Laravel,Metronic</td>
                          <td className="text-end">
                            <span className="badge badge-light-primary">Success</span>
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                              <span className="svg-icon svg-icon-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                  <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="currentColor" />
                                  <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="symbol symbol-45px me-2">
                              <span className="symbol-label">
                                <img src="assets/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt />
                              </span>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="mb-1 text-dark fw-bolder text-hover-primary fs-6">Active Customers</a>
                            <span className="text-muted fw-bold d-block">Movie Creator</span>
                          </td>
                          <td className="text-end text-muted fw-bold">AngularJS, C#</td>
                          <td className="text-end">
                            <span className="badge badge-light-danger">Rejected</span>
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                              <span className="svg-icon svg-icon-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                  <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="currentColor" />
                                  <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="symbol symbol-45px me-2">
                              <span className="symbol-label">
                                <img src="assets/media/svg/brand-logos/kickstarter.svg" className="h-50 align-self-center" alt />
                              </span>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="mb-1 text-dark fw-bolder text-hover-primary fs-6">Bestseller Theme</a>
                            <span className="text-muted fw-bold d-block">Best Customers</span>
                          </td>
                          <td className="text-end text-muted fw-bold">ReactJS, Ruby</td>
                          <td className="text-end">
                            <span className="badge badge-light-warning">In Progress</span>
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                              <span className="svg-icon svg-icon-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                  <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="currentColor" />
                                  <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </a>
                          </td>
                        </tr>
                      </tbody>
                      {/*end::Table body*/}
                    </table>
                  </div>
                  {/*end::Table*/}
                </div>
                {/*end::Tap pane*/}
                {/*begin::Tap pane*/}
                <div className="tab-pane fade" id="kt_table_widget_5_tab_2">
                  {/*begin::Table container*/}
                  <div className="table-responsive">
                    {/*begin::Table*/}
                    <table className="table align-middle table-row-dashed table-row-gray-200 gs-0 gy-4">
                      {/*begin::Table head*/}
                      <thead>
                        <tr className="border-0">
                          <th className="p-0 w-50px" />
                          <th className="p-0 min-w-150px" />
                          <th className="p-0 min-w-140px" />
                          <th className="p-0 min-w-110px" />
                          <th className="p-0 min-w-50px" />
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody>
                        <tr>
                          <td>
                            <div className="symbol symbol-45px me-2">
                              <span className="symbol-label">
                                <img src="assets/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt />
                              </span>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="mb-1 text-dark fw-bolder text-hover-primary fs-6">Brad Simmons</a>
                            <span className="text-muted fw-bold d-block">Movie Creator</span>
                          </td>
                          <td className="text-end text-muted fw-bold">React, HTML</td>
                          <td className="text-end">
                            <span className="badge badge-light-success">Approved</span>
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                              <span className="svg-icon svg-icon-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                  <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="currentColor" />
                                  <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="symbol symbol-45px me-2">
                              <span className="symbol-label">
                                <img src="assets/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt />
                              </span>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="mb-1 text-dark fw-bolder text-hover-primary fs-6">Popular Authors</a>
                            <span className="text-muted fw-bold d-block">Most Successful</span>
                          </td>
                          <td className="text-end text-muted fw-bold">Python, MySQL</td>
                          <td className="text-end">
                            <span className="badge badge-light-warning">In Progress</span>
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                              <span className="svg-icon svg-icon-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                  <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="currentColor" />
                                  <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="symbol symbol-45px me-2">
                              <span className="symbol-label">
                                <img src="assets/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt />
                              </span>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="mb-1 text-dark fw-bolder text-hover-primary fs-6">Active Customers</a>
                            <span className="text-muted fw-bold d-block">Movie Creator</span>
                          </td>
                          <td className="text-end text-muted fw-bold">AngularJS, C#</td>
                          <td className="text-end">
                            <span className="badge badge-light-danger">Rejected</span>
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                              <span className="svg-icon svg-icon-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                  <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="currentColor" />
                                  <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </a>
                          </td>
                        </tr>
                      </tbody>
                      {/*end::Table body*/}
                    </table>
                  </div>
                  {/*end::Table*/}
                </div>
                {/*end::Tap pane*/}
                {/*begin::Tap pane*/}
                <div className="tab-pane fade" id="kt_table_widget_5_tab_3">
                  {/*begin::Table container*/}
                  <div className="table-responsive">
                    {/*begin::Table*/}
                    <table className="table align-middle table-row-dashed table-row-gray-200 gs-0 gy-4">
                      {/*begin::Table head*/}
                      <thead>
                        <tr className="border-0">
                          <th className="p-0 w-50px" />
                          <th className="p-0 min-w-150px" />
                          <th className="p-0 min-w-140px" />
                          <th className="p-0 min-w-110px" />
                          <th className="p-0 min-w-50px" />
                        </tr>
                      </thead>
                      {/*end::Table head*/}
                      {/*begin::Table body*/}
                      <tbody>
                        <tr>
                          <td>
                            <div className="symbol symbol-45px me-2">
                              <span className="symbol-label">
                                <img src="assets/media/svg/brand-logos/kickstarter.svg" className="h-50 align-self-center" alt />
                              </span>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="mb-1 text-dark fw-bolder text-hover-primary fs-6">Bestseller Theme</a>
                            <span className="text-muted fw-bold d-block">Best Customers</span>
                          </td>
                          <td className="text-end text-muted fw-bold">ReactJS, Ruby</td>
                          <td className="text-end">
                            <span className="badge badge-light-warning">In Progress</span>
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                              <span className="svg-icon svg-icon-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                  <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="currentColor" />
                                  <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="symbol symbol-45px me-2">
                              <span className="symbol-label">
                                <img src="assets/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt />
                              </span>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="mb-1 text-dark fw-bolder text-hover-primary fs-6">Active Customers</a>
                            <span className="text-muted fw-bold d-block">Movie Creator</span>
                          </td>
                          <td className="text-end text-muted fw-bold">AngularJS, C#</td>
                          <td className="text-end">
                            <span className="badge badge-light-danger">Rejected</span>
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                              <span className="svg-icon svg-icon-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                  <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="currentColor" />
                                  <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="symbol symbol-45px me-2">
                              <span className="symbol-label">
                                <img src="assets/media/svg/brand-logos/vimeo.svg" className="h-50 align-self-center" alt />
                              </span>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="mb-1 text-dark fw-bolder text-hover-primary fs-6">New Users</a>
                            <span className="text-muted fw-bold d-block">Awesome Users</span>
                          </td>
                          <td className="text-end text-muted fw-bold">Laravel,Metronic</td>
                          <td className="text-end">
                            <span className="badge badge-light-primary">Success</span>
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                              <span className="svg-icon svg-icon-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                  <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="currentColor" />
                                  <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="symbol symbol-45px me-2">
                              <span className="symbol-label">
                                <img src="assets/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt />
                              </span>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="mb-1 text-dark fw-bolder text-hover-primary fs-6">Popular Authors</a>
                            <span className="text-muted fw-bold d-block">Most Successful</span>
                          </td>
                          <td className="text-end text-muted fw-bold">Python, MySQL</td>
                          <td className="text-end">
                            <span className="badge badge-light-warning">In Progress</span>
                          </td>
                          <td className="text-end">
                            <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                              <span className="svg-icon svg-icon-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                  <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="currentColor" />
                                  <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </a>
                          </td>
                        </tr>
                      </tbody>
                      {/*end::Table body*/}
                    </table>
                  </div>
                  {/*end::Table*/}
                </div>
                {/*end::Tap pane*/}
              </div>
            </div>
            {/*end::Body*/}
          </div>
          {/*end::Tables Widget 5*/}
        </div>
        {/*end::Col*/}
      </div>
      {/*end::Row*/}
      {/*begin::Calendar Widget 1*/}
      <div className="card">
        {/*begin::Card header*/}
        <div className="card-header">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bolder text-dark">My Calendar</span>
            <span className="mt-1 text-muted fw-bold fs-7">Preview monthly events</span>
          </h3>
          <div className="card-toolbar">
            <a href="../../demo1/dist/apps/calendar.html" className="btn btn-primary">Manage Calendar</a>
          </div>
        </div>
        {/*end::Card header*/}
        {/*begin::Card body*/}
        <div className="card-body">
          {/*begin::Calendar*/}
          <div id="kt_calendar_widget_1" />
          {/*end::Calendar*/}
        </div>
        {/*end::Card body*/}
      </div>
      {/*end::Calendar Widget 1*/}
      {/*begin::Modals*/}
      {/*begin::Modal - New Product*/}
      <div className="modal fade" id="kt_modal_add_event" tabIndex={-1} aria-hidden="true">
        {/*begin::Modal dialog*/}
        <div className="modal-dialog modal-dialog-centered mw-650px">
          {/*begin::Modal content*/}
          <div className="modal-content">
            {/*begin::Form*/}
            <form className="form" action="#" id="kt_modal_add_event_form">
              {/*begin::Modal header*/}
              <div className="modal-header">
                {/*begin::Modal title*/}
                <h2 className="fw-bolder" data-kt-calendar="title">Add Event</h2>
                {/*end::Modal title*/}
                {/*begin::Close*/}
                <div className="btn btn-icon btn-sm btn-active-icon-primary" id="kt_modal_add_event_close">
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                  <span className="svg-icon svg-icon-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="currentColor" />
                      <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
                {/*end::Close*/}
              </div>
              {/*end::Modal header*/}
              {/*begin::Modal body*/}
              <div className="py-10 modal-body px-lg-17">
                {/*begin::Input group*/}
                <div className="fv-row mb-9">
                  {/*begin::Label*/}
                  <label className="mb-2 fs-6 fw-bold required">Event Name</label>
                  {/*end::Label*/}
                  {/*begin::Input*/}
                  <input type="text" className="form-control form-control-solid" placeholder name="calendar_event_name" />
                  {/*end::Input*/}
                </div>
                {/*end::Input group*/}
                {/*begin::Input group*/}
                <div className="fv-row mb-9">
                  {/*begin::Label*/}
                  <label className="mb-2 fs-6 fw-bold">Event Description</label>
                  {/*end::Label*/}
                  {/*begin::Input*/}
                  <input type="text" className="form-control form-control-solid" placeholder name="calendar_event_description" />
                  {/*end::Input*/}
                </div>
                {/*end::Input group*/}
                {/*begin::Input group*/}
                <div className="fv-row mb-9">
                  {/*begin::Label*/}
                  <label className="mb-2 fs-6 fw-bold">Event Location</label>
                  {/*end::Label*/}
                  {/*begin::Input*/}
                  <input type="text" className="form-control form-control-solid" placeholder name="calendar_event_location" />
                  {/*end::Input*/}
                </div>
                {/*end::Input group*/}
                {/*begin::Input group*/}
                <div className="fv-row mb-9">
                  {/*begin::Checkbox*/}
                  <label className="form-check form-check-custom form-check-solid">
                    <input className="form-check-input" type="checkbox" defaultValue id="kt_calendar_datepicker_allday" />
                    <span className="form-check-label fw-bold" htmlFor="kt_calendar_datepicker_allday">All Day</span>
                  </label>
                  {/*end::Checkbox*/}
                </div>
                {/*end::Input group*/}
                {/*begin::Input group*/}
                <div className="row row-cols-lg-2 g-10">
                  <div className="col">
                    <div className="fv-row mb-9">
                      {/*begin::Label*/}
                      <label className="mb-2 fs-6 fw-bold required">Event Start Date</label>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <input className="form-control form-control-solid" name="calendar_event_start_date" placeholder="Pick a start date" id="kt_calendar_datepicker_start_date" />
                      {/*end::Input*/}
                    </div>
                  </div>
                  <div className="col" data-kt-calendar="datepicker">
                    <div className="fv-row mb-9">
                      {/*begin::Label*/}
                      <label className="mb-2 fs-6 fw-bold">Event Start Time</label>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <input className="form-control form-control-solid" name="calendar_event_start_time" placeholder="Pick a start time" id="kt_calendar_datepicker_start_time" />
                      {/*end::Input*/}
                    </div>
                  </div>
                </div>
                {/*end::Input group*/}
                {/*begin::Input group*/}
                <div className="row row-cols-lg-2 g-10">
                  <div className="col">
                    <div className="fv-row mb-9">
                      {/*begin::Label*/}
                      <label className="mb-2 fs-6 fw-bold required">Event End Date</label>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <input className="form-control form-control-solid" name="calendar_event_end_date" placeholder="Pick a end date" id="kt_calendar_datepicker_end_date" />
                      {/*end::Input*/}
                    </div>
                  </div>
                  <div className="col" data-kt-calendar="datepicker">
                    <div className="fv-row mb-9">
                      {/*begin::Label*/}
                      <label className="mb-2 fs-6 fw-bold">Event End Time</label>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <input className="form-control form-control-solid" name="calendar_event_end_time" placeholder="Pick a end time" id="kt_calendar_datepicker_end_time" />
                      {/*end::Input*/}
                    </div>
                  </div>
                </div>
                {/*end::Input group*/}
              </div>
              {/*end::Modal body*/}
              {/*begin::Modal footer*/}
              <div className="modal-footer flex-center">
                {/*begin::Button*/}
                <button type="reset" id="kt_modal_add_event_cancel" className="btn btn-light me-3">Cancel</button>
                {/*end::Button*/}
                {/*begin::Button*/}
                <button type="button" id="kt_modal_add_event_submit" className="btn btn-primary">
                  <span className="indicator-label">Submit</span>
                  <span className="indicator-progress">Please wait...
                    <span className="align-middle spinner-border spinner-border-sm ms-2" /></span>
                </button>
                {/*end::Button*/}
              </div>
              {/*end::Modal footer*/}
            </form>
            {/*end::Form*/}
          </div>
        </div>
      </div>
      {/*end::Modal - New Product*/}
      {/*begin::Modal - New Product*/}
      <div className="modal fade" id="kt_modal_view_event" tabIndex={-1} aria-hidden="true">
        {/*begin::Modal dialog*/}
        <div className="modal-dialog modal-dialog-centered mw-650px">
          {/*begin::Modal content*/}
          <div className="modal-content">
            {/*begin::Modal header*/}
            <div className="border-0 modal-header justify-content-end">
              {/*begin::Edit*/}
              <div className="btn btn-icon btn-sm btn-color-gray-400 btn-active-icon-primary me-2" data-bs-toggle="tooltip" data-bs-dismiss="click" title="Edit Event" id="kt_modal_view_event_edit">
                {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                <span className="svg-icon svg-icon-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                    <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
              </div>
              {/*end::Edit*/}
              {/*begin::Edit*/}
              <div className="btn btn-icon btn-sm btn-color-gray-400 btn-active-icon-danger me-2" data-bs-toggle="tooltip" data-bs-dismiss="click" title="Delete Event" id="kt_modal_view_event_delete">
                {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                <span className="svg-icon svg-icon-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                    <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                    <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
              </div>
              {/*end::Edit*/}
              {/*begin::Close*/}
              <div className="btn btn-icon btn-sm btn-color-gray-500 btn-active-icon-primary" data-bs-toggle="tooltip" title="Hide Event" data-bs-dismiss="modal">
                {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                <span className="svg-icon svg-icon-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="currentColor" />
                    <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="currentColor" />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
              </div>
              {/*end::Close*/}
            </div>
            {/*end::Modal header*/}
            {/*begin::Modal body*/}
            <div className="pt-0 pb-20 modal-body px-lg-17">
              {/*begin::Row*/}
              <div className="d-flex">
                {/*begin::Icon*/}
                {/*begin::Svg Icon | path: icons/duotune/general/gen014.svg*/}
                <span className="svg-icon svg-icon-1 svg-icon-muted me-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path opacity="0.3" d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z" fill="currentColor" />
                    <path d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z" fill="currentColor" />
                    <path d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z" fill="currentColor" />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
                {/*end::Icon*/}
                <div className="mb-9">
                  {/*begin::Event name*/}
                  <div className="mb-2 d-flex align-items-center">
                    <span className="fs-3 fw-bolder me-3" data-kt-calendar="event_name" />
                    <span className="badge badge-light-success" data-kt-calendar="all_day" />
                  </div>
                  {/*end::Event name*/}
                  {/*begin::Event description*/}
                  <div className="fs-6" data-kt-calendar="event_description" />
                  {/*end::Event description*/}
                </div>
              </div>
              {/*end::Row*/}
              {/*begin::Row*/}
              <div className="mb-2 d-flex align-items-center">
                {/*begin::Icon*/}
                {/*begin::Svg Icon | path: icons/duotune/abstract/abs050.svg*/}
                <span className="svg-icon svg-icon-1 svg-icon-success me-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <circle fill="currentColor" cx={12} cy={12} r={8} />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
                {/*end::Icon*/}
                {/*begin::Event start date/time*/}
                <div className="fs-6">
                  <span className="fw-bolder">Starts</span>
                  <span data-kt-calendar="event_start_date" />
                </div>
                {/*end::Event start date/time*/}
              </div>
              {/*end::Row*/}
              {/*begin::Row*/}
              <div className="d-flex align-items-center mb-9">
                {/*begin::Icon*/}
                {/*begin::Svg Icon | path: icons/duotune/abstract/abs050.svg*/}
                <span className="svg-icon svg-icon-1 svg-icon-danger me-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <circle fill="currentColor" cx={12} cy={12} r={8} />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
                {/*end::Icon*/}
                {/*begin::Event end date/time*/}
                <div className="fs-6">
                  <span className="fw-bolder">Ends</span>
                  <span data-kt-calendar="event_end_date" />
                </div>
                {/*end::Event end date/time*/}
              </div>
              {/*end::Row*/}
              {/*begin::Row*/}
              <div className="d-flex align-items-center">
                {/*begin::Icon*/}
                {/*begin::Svg Icon | path: icons/duotune/general/gen018.svg*/}
                <span className="svg-icon svg-icon-1 svg-icon-muted me-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="currentColor" />
                    <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="currentColor" />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
                {/*end::Icon*/}
                {/*begin::Event location*/}
                <div className="fs-6" data-kt-calendar="event_location" />
                {/*end::Event location*/}
              </div>
              {/*end::Row*/}
            </div>
            {/*end::Modal body*/}
          </div>
        </div>
      </div>
      {/*end::Modal - New Product*/}
      {/*end::Modals*/}
    </div>
    {/*end::Container*/}
    <div>
  {/*begin::Drawers*/}
  {/*begin::Activities drawer*/}
  <div id="kt_activities" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="activities" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'lg': '900px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_activities_toggle" data-kt-drawer-close="#kt_activities_close">
    <div className="shadow-none card rounded-0">
      {/*begin::Header*/}
      <div className="card-header" id="kt_activities_header">
        <h3 className="card-title fw-bolder text-dark">Activity Logs</h3>
        <div className="card-toolbar">
          <button type="button" className="btn btn-sm btn-icon btn-active-light-primary me-n5" id="kt_activities_close">
            {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
            <span className="svg-icon svg-icon-1">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="currentColor" />
                <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="currentColor" />
              </svg>
            </span>
            {/*end::Svg Icon*/}
          </button>
        </div>
      </div>
      {/*end::Header*/}
      {/*begin::Body*/}
      <div className="card-body position-relative" id="kt_activities_body">
        {/*begin::Content*/}
        <div id="kt_activities_scroll" className="position-relative scroll-y me-n5 pe-5" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-wrappers="#kt_activities_body" data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer" data-kt-scroll-offset="5px">
          {/*begin::Timeline items*/}
          <div className="timeline">
            {/*begin::Timeline item*/}
            <div className="timeline-item">
              {/*begin::Timeline line*/}
              <div className="timeline-line w-40px" />
              {/*end::Timeline line*/}
              {/*begin::Timeline icon*/}
              <div className="timeline-icon symbol symbol-circle symbol-40px me-4">
                <div className="symbol-label bg-light">
                  {/*begin::Svg Icon | path: icons/duotune/communication/com003.svg*/}
                  <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path opacity="0.3" d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z" fill="currentColor" />
                      <path d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/*end::Timeline icon*/}
              {/*begin::Timeline content*/}
              <div className="mb-10 timeline-content mt-n1">
                {/*begin::Timeline heading*/}
                <div className="mb-5 pe-3">
                  {/*begin::Title*/}
                  <div className="mb-2 fs-5 fw-bold">There are 2 new tasks for you in “AirPlus Mobile App” project:</div>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="mt-1 d-flex align-items-center fs-6">
                    {/*begin::Info*/}
                    <div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
                    {/*end::Info*/}
                    {/*begin::User*/}
                    <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                      <img src="assets/media/avatars/300-14.jpg" alt="img" />
                    </div>
                    {/*end::User*/}
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
                {/*begin::Timeline details*/}
                <div className="pb-5 overflow-auto">
                  {/*begin::Record*/}
                  <div className="py-3 mb-5 border border-gray-300 border-dashed rounded d-flex align-items-center min-w-750px px-7">
                    {/*begin::Title*/}
                    <a href="../../demo1/dist/apps/projects/project.html" className="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px">Meeting with customer</a>
                    {/*end::Title*/}
                    {/*begin::Label*/}
                    <div className="min-w-175px pe-2">
                      <span className="badge badge-light text-muted">Application Design</span>
                    </div>
                    {/*end::Label*/}
                    {/*begin::Users*/}
                    <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px">
                        <img src="assets/media/avatars/300-2.jpg" alt="img" />
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px">
                        <img src="assets/media/avatars/300-14.jpg" alt="img" />
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px">
                        <div className="symbol-label fs-8 fw-bold bg-primary text-inverse-primary">A</div>
                      </div>
                      {/*end::User*/}
                    </div>
                    {/*end::Users*/}
                    {/*begin::Progress*/}
                    <div className="min-w-125px pe-2">
                      <span className="badge badge-light-primary">In Progress</span>
                    </div>
                    {/*end::Progress*/}
                    {/*begin::Action*/}
                    <a href="../../demo1/dist/apps/projects/project.html" className="btn btn-sm btn-light btn-active-light-primary">View</a>
                    {/*end::Action*/}
                  </div>
                  {/*end::Record*/}
                  {/*begin::Record*/}
                  <div className="py-3 mb-0 border border-gray-300 border-dashed rounded d-flex align-items-center min-w-750px px-7">
                    {/*begin::Title*/}
                    <a href="../../demo1/dist/apps/projects/project.html" className="fs-5 text-dark text-hover-primary fw-bold w-375px min-w-200px">Project Delivery Preparation</a>
                    {/*end::Title*/}
                    {/*begin::Label*/}
                    <div className="min-w-175px">
                      <span className="badge badge-light text-muted">CRM System Development</span>
                    </div>
                    {/*end::Label*/}
                    {/*begin::Users*/}
                    <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px">
                        <img src="assets/media/avatars/300-20.jpg" alt="img" />
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px">
                        <div className="symbol-label fs-8 fw-bold bg-success text-inverse-primary">B</div>
                      </div>
                      {/*end::User*/}
                    </div>
                    {/*end::Users*/}
                    {/*begin::Progress*/}
                    <div className="min-w-125px">
                      <span className="badge badge-light-success">Completed</span>
                    </div>
                    {/*end::Progress*/}
                    {/*begin::Action*/}
                    <a href="../../demo1/dist/apps/projects/project.html" className="btn btn-sm btn-light btn-active-light-primary">View</a>
                    {/*end::Action*/}
                  </div>
                  {/*end::Record*/}
                </div>
                {/*end::Timeline details*/}
              </div>
              {/*end::Timeline content*/}
            </div>
            {/*end::Timeline item*/}
            {/*begin::Timeline item*/}
            <div className="timeline-item">
              {/*begin::Timeline line*/}
              <div className="timeline-line w-40px" />
              {/*end::Timeline line*/}
              {/*begin::Timeline icon*/}
              <div className="timeline-icon symbol symbol-circle symbol-40px">
                <div className="symbol-label bg-light">
                  {/*begin::Svg Icon | path: icons/duotune/communication/com009.svg*/}
                  <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path opacity="0.3" d="M5.78001 21.115L3.28001 21.949C3.10897 22.0059 2.92548 22.0141 2.75004 21.9727C2.57461 21.9312 2.41416 21.8418 2.28669 21.7144C2.15923 21.5869 2.06975 21.4264 2.0283 21.251C1.98685 21.0755 1.99507 20.892 2.05201 20.7209L2.886 18.2209L7.22801 13.879L10.128 16.774L5.78001 21.115Z" fill="currentColor" />
                      <path d="M21.7 8.08899L15.911 2.30005C15.8161 2.2049 15.7033 2.12939 15.5792 2.07788C15.455 2.02637 15.3219 1.99988 15.1875 1.99988C15.0531 1.99988 14.92 2.02637 14.7958 2.07788C14.6717 2.12939 14.5589 2.2049 14.464 2.30005L13.74 3.02295C13.548 3.21498 13.4402 3.4754 13.4402 3.74695C13.4402 4.01849 13.548 4.27892 13.74 4.47095L14.464 5.19397L11.303 8.35498C10.1615 7.80702 8.87825 7.62639 7.62985 7.83789C6.38145 8.04939 5.2293 8.64265 4.332 9.53601C4.14026 9.72817 4.03256 9.98855 4.03256 10.26C4.03256 10.5315 4.14026 10.7918 4.332 10.984L13.016 19.667C13.208 19.859 13.4684 19.9668 13.74 19.9668C14.0115 19.9668 14.272 19.859 14.464 19.667C15.3575 18.77 15.9509 17.618 16.1624 16.3698C16.374 15.1215 16.1932 13.8383 15.645 12.697L18.806 9.53601L19.529 10.26C19.721 10.452 19.9814 10.5598 20.253 10.5598C20.5245 10.5598 20.785 10.452 20.977 10.26L21.7 9.53601C21.7952 9.44108 21.8706 9.32825 21.9221 9.2041C21.9737 9.07995 22.0002 8.94691 22.0002 8.8125C22.0002 8.67809 21.9737 8.54505 21.9221 8.4209C21.8706 8.29675 21.7952 8.18392 21.7 8.08899Z" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/*end::Timeline icon*/}
              {/*begin::Timeline content*/}
              <div className="mb-10 timeline-content mt-n2">
                {/*begin::Timeline heading*/}
                <div className="overflow-auto pe-3">
                  {/*begin::Title*/}
                  <div className="mb-2 fs-5 fw-bold">Invitation for crafting engaging designs that speak human workshop</div>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="mt-1 d-flex align-items-center fs-6">
                    {/*begin::Info*/}
                    <div className="text-muted me-2 fs-7">Sent at 4:23 PM by</div>
                    {/*end::Info*/}
                    {/*begin::User*/}
                    <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Alan Nilson">
                      <img src="assets/media/avatars/300-1.jpg" alt="img" />
                    </div>
                    {/*end::User*/}
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
              </div>
              {/*end::Timeline content*/}
            </div>
            {/*end::Timeline item*/}
            {/*begin::Timeline item*/}
            <div className="timeline-item">
              {/*begin::Timeline line*/}
              <div className="timeline-line w-40px" />
              {/*end::Timeline line*/}
              {/*begin::Timeline icon*/}
              <div className="timeline-icon symbol symbol-circle symbol-40px">
                <div className="symbol-label bg-light">
                  {/*begin::Svg Icon | path: icons/duotune/coding/cod008.svg*/}
                  <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z" fill="currentColor" />
                      <path opacity="0.3" d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/*end::Timeline icon*/}
              {/*begin::Timeline content*/}
              <div className="mb-10 timeline-content mt-n1">
                {/*begin::Timeline heading*/}
                <div className="mb-5 pe-3">
                  {/*begin::Title*/}
                  <a href="#" className="mb-2 text-gray-800 fs-5 fw-bold text-hover-primary">3 New Incoming Project Files:</a>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="mt-1 d-flex align-items-center fs-6">
                    {/*begin::Info*/}
                    <div className="text-muted me-2 fs-7">Sent at 10:30 PM by</div>
                    {/*end::Info*/}
                    {/*begin::User*/}
                    <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Jan Hummer">
                      <img src="assets/media/avatars/300-23.jpg" alt="img" />
                    </div>
                    {/*end::User*/}
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
                {/*begin::Timeline details*/}
                <div className="pb-5 overflow-auto">
                  <div className="p-5 border border-gray-300 border-dashed rounded d-flex align-items-center min-w-700px">
                    {/*begin::Item*/}
                    <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                      {/*begin::Icon*/}
                      <img alt className="w-30px me-3" src="assets/media/svg/files/pdf.svg" />
                      {/*end::Icon*/}
                      {/*begin::Info*/}
                      <div className="ms-1 fw-bold">
                        {/*begin::Desc*/}
                        <a href="../../demo1/dist/apps/projects/project.html" className="fs-6 text-hover-primary fw-bolder">Finance KPI App Guidelines</a>
                        {/*end::Desc*/}
                        {/*begin::Number*/}
                        <div className="text-gray-400">1.9mb</div>
                        {/*end::Number*/}
                      </div>
                      {/*begin::Info*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                      {/*begin::Icon*/}
                      <img alt="../../demo1/dist/apps/projects/project.html" className="w-30px me-3" src="assets/media/svg/files/doc.svg" />
                      {/*end::Icon*/}
                      {/*begin::Info*/}
                      <div className="ms-1 fw-bold">
                        {/*begin::Desc*/}
                        <a href="#" className="fs-6 text-hover-primary fw-bolder">Client UAT Testing Results</a>
                        {/*end::Desc*/}
                        {/*begin::Number*/}
                        <div className="text-gray-400">18kb</div>
                        {/*end::Number*/}
                      </div>
                      {/*end::Info*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-aligns-center">
                      {/*begin::Icon*/}
                      <img alt="../../demo1/dist/apps/projects/project.html" className="w-30px me-3" src="assets/media/svg/files/css.svg" />
                      {/*end::Icon*/}
                      {/*begin::Info*/}
                      <div className="ms-1 fw-bold">
                        {/*begin::Desc*/}
                        <a href="#" className="fs-6 text-hover-primary fw-bolder">Finance Reports</a>
                        {/*end::Desc*/}
                        {/*begin::Number*/}
                        <div className="text-gray-400">20mb</div>
                        {/*end::Number*/}
                      </div>
                      {/*end::Icon*/}
                    </div>
                    {/*end::Item*/}
                  </div>
                </div>
                {/*end::Timeline details*/}
              </div>
              {/*end::Timeline content*/}
            </div>
            {/*end::Timeline item*/}
            {/*begin::Timeline item*/}
            <div className="timeline-item">
              {/*begin::Timeline line*/}
              <div className="timeline-line w-40px" />
              {/*end::Timeline line*/}
              {/*begin::Timeline icon*/}
              <div className="timeline-icon symbol symbol-circle symbol-40px">
                <div className="symbol-label bg-light">
                  {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                  <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor" />
                      <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/*end::Timeline icon*/}
              {/*begin::Timeline content*/}
              <div className="mb-10 timeline-content mt-n1">
                {/*begin::Timeline heading*/}
                <div className="mb-5 pe-3">
                  {/*begin::Title*/}
                  <div className="mb-2 fs-5 fw-bold">Task
                    <a href="#" className="text-primary fw-bolder me-1">#45890</a>merged with
                    <a href="#" className="text-primary fw-bolder me-1">#45890</a>in “Ads Pro Admin Dashboard project:</div>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="mt-1 d-flex align-items-center fs-6">
                    {/*begin::Info*/}
                    <div className="text-muted me-2 fs-7">Initiated at 4:23 PM by</div>
                    {/*end::Info*/}
                    {/*begin::User*/}
                    <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                      <img src="assets/media/avatars/300-14.jpg" alt="img" />
                    </div>
                    {/*end::User*/}
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
              </div>
              {/*end::Timeline content*/}
            </div>
            {/*end::Timeline item*/}
            {/*begin::Timeline item*/}
            <div className="timeline-item">
              {/*begin::Timeline line*/}
              <div className="timeline-line w-40px" />
              {/*end::Timeline line*/}
              {/*begin::Timeline icon*/}
              <div className="timeline-icon symbol symbol-circle symbol-40px">
                <div className="symbol-label bg-light">
                  {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                  <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                      <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/*end::Timeline icon*/}
              {/*begin::Timeline content*/}
              <div className="mb-10 timeline-content mt-n1">
                {/*begin::Timeline heading*/}
                <div className="mb-5 pe-3">
                  {/*begin::Title*/}
                  <div className="mb-2 fs-5 fw-bold">3 new application design concepts added:</div>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="mt-1 d-flex align-items-center fs-6">
                    {/*begin::Info*/}
                    <div className="text-muted me-2 fs-7">Created at 4:23 PM by</div>
                    {/*end::Info*/}
                    {/*begin::User*/}
                    <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Marcus Dotson">
                      <img src="assets/media/avatars/300-2.jpg" alt="img" />
                    </div>
                    {/*end::User*/}
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
                {/*begin::Timeline details*/}
                <div className="pb-5 overflow-auto">
                  <div className="border border-gray-300 border-dashed rounded d-flex align-items-center min-w-700px p-7">
                    {/*begin::Item*/}
                    <div className="overlay me-10">
                      {/*begin::Image*/}
                      <div className="overlay-wrapper">
                        <img alt="img" className="rounded w-150px" src="assets/media/stock/600x400/img-29.jpg" />
                      </div>
                      {/*end::Image*/}
                      {/*begin::Link*/}
                      <div className="rounded overlay-layer bg-dark bg-opacity-10">
                        <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                      </div>
                      {/*end::Link*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="overlay me-10">
                      {/*begin::Image*/}
                      <div className="overlay-wrapper">
                        <img alt="img" className="rounded w-150px" src="assets/media/stock/600x400/img-31.jpg" />
                      </div>
                      {/*end::Image*/}
                      {/*begin::Link*/}
                      <div className="rounded overlay-layer bg-dark bg-opacity-10">
                        <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                      </div>
                      {/*end::Link*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="overlay">
                      {/*begin::Image*/}
                      <div className="overlay-wrapper">
                        <img alt="img" className="rounded w-150px" src="assets/media/stock/600x400/img-40.jpg" />
                      </div>
                      {/*end::Image*/}
                      {/*begin::Link*/}
                      <div className="rounded overlay-layer bg-dark bg-opacity-10">
                        <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                      </div>
                      {/*end::Link*/}
                    </div>
                    {/*end::Item*/}
                  </div>
                </div>
                {/*end::Timeline details*/}
              </div>
              {/*end::Timeline content*/}
            </div>
            {/*end::Timeline item*/}
            {/*begin::Timeline item*/}
            <div className="timeline-item">
              {/*begin::Timeline line*/}
              <div className="timeline-line w-40px" />
              {/*end::Timeline line*/}
              {/*begin::Timeline icon*/}
              <div className="timeline-icon symbol symbol-circle symbol-40px">
                <div className="symbol-label bg-light">
                  {/*begin::Svg Icon | path: icons/duotune/communication/com010.svg*/}
                  <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z" fill="currentColor" />
                      <path opacity="0.3" d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/*end::Timeline icon*/}
              {/*begin::Timeline content*/}
              <div className="mb-10 timeline-content mt-n1">
                {/*begin::Timeline heading*/}
                <div className="mb-5 pe-3">
                  {/*begin::Title*/}
                  <div className="mb-2 fs-5 fw-bold">New case
                    <a href="#" className="text-primary fw-bolder me-1">#67890</a>is assigned to you in Multi-platform Database Design project</div>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="pb-5 overflow-auto">
                    {/*begin::Wrapper*/}
                    <div className="mt-1 d-flex align-items-center fs-6">
                      {/*begin::Info*/}
                      <div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
                      {/*end::Info*/}
                      {/*begin::User*/}
                      <a href="#" className="text-primary fw-bolder me-1">Alice Tan</a>
                      {/*end::User*/}
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
              </div>
              {/*end::Timeline content*/}
            </div>
            {/*end::Timeline item*/}
            {/*begin::Timeline item*/}
            <div className="timeline-item">
              {/*begin::Timeline line*/}
              <div className="timeline-line w-40px" />
              {/*end::Timeline line*/}
              {/*begin::Timeline icon*/}
              <div className="timeline-icon symbol symbol-circle symbol-40px">
                <div className="symbol-label bg-light">
                  {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                  <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                      <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/*end::Timeline icon*/}
              {/*begin::Timeline content*/}
              <div className="mb-10 timeline-content mt-n1">
                {/*begin::Timeline heading*/}
                <div className="mb-5 pe-3">
                  {/*begin::Title*/}
                  <div className="mb-2 fs-5 fw-bold">You have received a new order:</div>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="mt-1 d-flex align-items-center fs-6">
                    {/*begin::Info*/}
                    <div className="text-muted me-2 fs-7">Placed at 5:05 AM by</div>
                    {/*end::Info*/}
                    {/*begin::User*/}
                    <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Robert Rich">
                      <img src="assets/media/avatars/300-4.jpg" alt="img" />
                    </div>
                    {/*end::User*/}
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
                {/*begin::Timeline details*/}
                <div className="pb-5 overflow-auto">
                  {/*begin::Notice*/}
                  <div className="flex-shrink-0 p-6 border border-dashed rounded notice d-flex bg-light-primary border-primary min-w-lg-600px">
                    {/*begin::Icon*/}
                    {/*begin::Svg Icon | path: icons/duotune/coding/cod004.svg*/}
                    <span className="svg-icon svg-icon-2tx svg-icon-primary me-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path opacity="0.3" d="M19.0687 17.9688H11.0687C10.4687 17.9688 10.0687 18.3687 10.0687 18.9688V19.9688C10.0687 20.5687 10.4687 20.9688 11.0687 20.9688H19.0687C19.6687 20.9688 20.0687 20.5687 20.0687 19.9688V18.9688C20.0687 18.3687 19.6687 17.9688 19.0687 17.9688Z" fill="currentColor" />
                        <path d="M4.06875 17.9688C3.86875 17.9688 3.66874 17.8688 3.46874 17.7688C2.96874 17.4688 2.86875 16.8688 3.16875 16.3688L6.76874 10.9688L3.16875 5.56876C2.86875 5.06876 2.96874 4.46873 3.46874 4.16873C3.96874 3.86873 4.56875 3.96878 4.86875 4.46878L8.86875 10.4688C9.06875 10.7688 9.06875 11.2688 8.86875 11.5688L4.86875 17.5688C4.66875 17.7688 4.36875 17.9688 4.06875 17.9688Z" fill="currentColor" />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                    {/*end::Icon*/}
                    {/*begin::Wrapper*/}
                    <div className="flex-wrap d-flex flex-stack flex-grow-1 flex-md-nowrap">
                      {/*begin::Content*/}
                      <div className="mb-3 mb-md-0 fw-bold">
                        <h4 className="text-gray-900 fw-bolder">Database Backup Process Completed!</h4>
                        <div className="text-gray-700 fs-6 pe-7">Login into Admin Dashboard to make sure the data integrity is OK</div>
                      </div>
                      {/*end::Content*/}
                      {/*begin::Action*/}
                      <a href="#" className="px-6 btn btn-primary align-self-center text-nowrap">Proceed</a>
                      {/*end::Action*/}
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                  {/*end::Notice*/}
                </div>
                {/*end::Timeline details*/}
              </div>
              {/*end::Timeline content*/}
            </div>
            {/*end::Timeline item*/}
            {/*begin::Timeline item*/}
            <div className="timeline-item">
              {/*begin::Timeline line*/}
              <div className="timeline-line w-40px" />
              {/*end::Timeline line*/}
              {/*begin::Timeline icon*/}
              <div className="timeline-icon symbol symbol-circle symbol-40px">
                <div className="symbol-label bg-light">
                  {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                  <span className="svg-icon svg-icon-2 svg-icon-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                      <path d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z" fill="currentColor" />
                      <path opacity="0.3" d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z" fill="currentColor" />
                      <path opacity="0.3" d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z" fill="currentColor" />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/*end::Timeline icon*/}
              {/*begin::Timeline content*/}
              <div className="timeline-content mt-n1">
                {/*begin::Timeline heading*/}
                <div className="mb-5 pe-3">
                  {/*begin::Title*/}
                  <div className="mb-2 fs-5 fw-bold">New order
                    <a href="#" className="text-primary fw-bolder me-1">#67890</a>is placed for Workshow Planning &amp; Budget Estimation</div>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="mt-1 d-flex align-items-center fs-6">
                    {/*begin::Info*/}
                    <div className="text-muted me-2 fs-7">Placed at 4:23 PM by</div>
                    {/*end::Info*/}
                    {/*begin::User*/}
                    <a href="#" className="text-primary fw-bolder me-1">Jimmy Bold</a>
                    {/*end::User*/}
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
              </div>
              {/*end::Timeline content*/}
            </div>
            {/*end::Timeline item*/}
          </div>
          {/*end::Timeline items*/}
        </div>
        {/*end::Content*/}
      </div>
      {/*end::Body*/}
      {/*begin::Footer*/}
      <div className="py-5 text-center card-footer" id="kt_activities_footer">
        <a href="../../demo1/dist/pages/user-profile/activity.html" className="btn btn-bg-body text-primary">View All Activities
          {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
          <span className="svg-icon svg-icon-3 svg-icon-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
              <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="currentColor" />
              <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
            </svg>
          </span>
          {/*end::Svg Icon*/}</a>
      </div>
      {/*end::Footer*/}
    </div>
  </div>
  {/*end::Activities drawer*/}
  {/*begin::Chat drawer*/}
  <div id="kt_drawer_chat" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="chat" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'md': '500px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_drawer_chat_toggle" data-kt-drawer-close="#kt_drawer_chat_close">
    {/*begin::Messenger*/}
    <div className="border-0 card w-100 rounded-0" id="kt_drawer_chat_messenger">
      {/*begin::Card header*/}
      <div className="card-header pe-5" id="kt_drawer_chat_messenger_header">
        {/*begin::Title*/}
        <div className="card-title">
          {/*begin::User*/}
          <div className="d-flex justify-content-center flex-column me-3">
            <a href="#" className="mb-2 text-gray-900 fs-4 fw-bolder text-hover-primary me-1 lh-1">Brian Cox</a>
            {/*begin::Info*/}
            <div className="mb-0 lh-1">
              <span className="badge badge-success badge-circle w-10px h-10px me-1" />
              <span className="fs-7 fw-bold text-muted">Active</span>
            </div>
            {/*end::Info*/}
          </div>
          {/*end::User*/}
        </div>
        {/*end::Title*/}
        {/*begin::Card toolbar*/}
        <div className="card-toolbar">
          {/*begin::Menu*/}
          <div className="me-2">
            <button className="btn btn-sm btn-icon btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
              <i className="bi bi-three-dots fs-3" />
            </button>
            {/*begin::Menu 3*/}
            <div className="py-3 menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px" data-kt-menu="true">
              {/*begin::Heading*/}
              <div className="px-3 menu-item">
                <div className="px-3 pb-2 menu-content text-muted fs-7 text-uppercase">Contacts</div>
              </div>
              {/*end::Heading*/}
              {/*begin::Menu item*/}
              <div className="px-3 menu-item">
                <a href="#" className="px-3 menu-link" data-bs-toggle="modal" data-bs-target="#kt_modal_users_search">Add Contact</a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="px-3 menu-item">
                <a href="#" className="px-3 menu-link flex-stack" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">Invite Contacts
                  <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a contact email to send an invitation" /></a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="px-3 menu-item" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                <a href="#" className="px-3 menu-link">
                  <span className="menu-title">Groups</span>
                  <span className="menu-arrow" />
                </a>
                {/*begin::Menu sub*/}
                <div className="py-4 menu-sub menu-sub-dropdown w-175px">
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item">
                    <a href="#" className="px-3 menu-link" data-bs-toggle="tooltip" title="Coming soon">Create Group</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item">
                    <a href="#" className="px-3 menu-link" data-bs-toggle="tooltip" title="Coming soon">Invite Members</a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="px-3 menu-item">
                    <a href="#" className="px-3 menu-link" data-bs-toggle="tooltip" title="Coming soon">Settings</a>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu sub*/}
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="px-3 my-1 menu-item">
                <a href="#" className="px-3 menu-link" data-bs-toggle="tooltip" title="Coming soon">Settings</a>
              </div>
              {/*end::Menu item*/}
            </div>
            {/*end::Menu 3*/}
          </div>
          {/*end::Menu*/}
          {/*begin::Close*/}
          <div className="btn btn-sm btn-icon btn-active-light-primary" id="kt_drawer_chat_close">
            {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
            <span className="svg-icon svg-icon-2">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="currentColor" />
                <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="currentColor" />
              </svg>
            </span>
            {/*end::Svg Icon*/}
          </div>
          {/*end::Close*/}
        </div>
        {/*end::Card toolbar*/}
      </div>
      {/*end::Card header*/}
      {/*begin::Card body*/}
      <div className="card-body" id="kt_drawer_chat_messenger_body">
        {/*begin::Messages*/}
        <div className="scroll-y me-n5 pe-5" data-kt-element="messages" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer" data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body" data-kt-scroll-offset="0px">
          {/*begin::Message(in)*/}
          <div className="mb-10 d-flex justify-content-start">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-start">
              {/*begin::User*/}
              <div className="mb-2 d-flex align-items-center">
                {/*begin::Avatar*/}
                <div className="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                </div>
                {/*end::Avatar*/}
                {/*begin::Details*/}
                <div className="ms-3">
                  <a href="#" className="text-gray-900 fs-5 fw-bolder text-hover-primary me-1">Brian Cox</a>
                  <span className="mb-1 text-muted fs-7">2 mins</span>
                </div>
                {/*end::Details*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div className="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">How likely are you to recommend our company to your friends and family ?</div>
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(in)*/}
          {/*begin::Message(out)*/}
          <div className="mb-10 d-flex justify-content-end">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-end">
              {/*begin::User*/}
              <div className="mb-2 d-flex align-items-center">
                {/*begin::Details*/}
                <div className="me-3">
                  <span className="mb-1 text-muted fs-7">5 mins</span>
                  <a href="#" className="text-gray-900 fs-5 fw-bolder text-hover-primary ms-1">You</a>
                </div>
                {/*end::Details*/}
                {/*begin::Avatar*/}
                <div className="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                </div>
                {/*end::Avatar*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div className="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end" data-kt-element="message-text">Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.</div>
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(out)*/}
          {/*begin::Message(in)*/}
          <div className="mb-10 d-flex justify-content-start">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-start">
              {/*begin::User*/}
              <div className="mb-2 d-flex align-items-center">
                {/*begin::Avatar*/}
                <div className="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                </div>
                {/*end::Avatar*/}
                {/*begin::Details*/}
                <div className="ms-3">
                  <a href="#" className="text-gray-900 fs-5 fw-bolder text-hover-primary me-1">Brian Cox</a>
                  <span className="mb-1 text-muted fs-7">1 Hour</span>
                </div>
                {/*end::Details*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div className="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">Ok, Understood!</div>
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(in)*/}
          {/*begin::Message(out)*/}
          <div className="mb-10 d-flex justify-content-end">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-end">
              {/*begin::User*/}
              <div className="mb-2 d-flex align-items-center">
                {/*begin::Details*/}
                <div className="me-3">
                  <span className="mb-1 text-muted fs-7">2 Hours</span>
                  <a href="#" className="text-gray-900 fs-5 fw-bolder text-hover-primary ms-1">You</a>
                </div>
                {/*end::Details*/}
                {/*begin::Avatar*/}
                <div className="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                </div>
                {/*end::Avatar*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div className="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end" data-kt-element="message-text">You’ll receive notifications for all issues, pull requests!</div>
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(out)*/}
          {/*begin::Message(in)*/}
          <div className="mb-10 d-flex justify-content-start">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-start">
              {/*begin::User*/}
              <div className="mb-2 d-flex align-items-center">
                {/*begin::Avatar*/}
                <div className="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                </div>
                {/*end::Avatar*/}
                {/*begin::Details*/}
                <div className="ms-3">
                  <a href="#" className="text-gray-900 fs-5 fw-bolder text-hover-primary me-1">Brian Cox</a>
                  <span className="mb-1 text-muted fs-7">3 Hours</span>
                </div>
                {/*end::Details*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div className="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">You can unwatch this repository immediately by clicking here:
                <a href="https://keenthemes.com">Keenthemes.com</a></div>
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(in)*/}
          {/*begin::Message(out)*/}
          <div className="mb-10 d-flex justify-content-end">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-end">
              {/*begin::User*/}
              <div className="mb-2 d-flex align-items-center">
                {/*begin::Details*/}
                <div className="me-3">
                  <span className="mb-1 text-muted fs-7">4 Hours</span>
                  <a href="#" className="text-gray-900 fs-5 fw-bolder text-hover-primary ms-1">You</a>
                </div>
                {/*end::Details*/}
                {/*begin::Avatar*/}
                <div className="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                </div>
                {/*end::Avatar*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div className="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end" data-kt-element="message-text">Most purchased Business courses during this sale!</div>
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(out)*/}
          {/*begin::Message(in)*/}
          <div className="mb-10 d-flex justify-content-start">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-start">
              {/*begin::User*/}
              <div className="mb-2 d-flex align-items-center">
                {/*begin::Avatar*/}
                <div className="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                </div>
                {/*end::Avatar*/}
                {/*begin::Details*/}
                <div className="ms-3">
                  <a href="#" className="text-gray-900 fs-5 fw-bolder text-hover-primary me-1">Brian Cox</a>
                  <span className="mb-1 text-muted fs-7">5 Hours</span>
                </div>
                {/*end::Details*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div className="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided</div>
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(in)*/}
          {/*begin::Message(template for out)*/}
          <div className="mb-10 d-flex justify-content-end d-none" data-kt-element="template-out">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-end">
              {/*begin::User*/}
              <div className="mb-2 d-flex align-items-center">
                {/*begin::Details*/}
                <div className="me-3">
                  <span className="mb-1 text-muted fs-7">Just now</span>
                  <a href="#" className="text-gray-900 fs-5 fw-bolder text-hover-primary ms-1">You</a>
                </div>
                {/*end::Details*/}
                {/*begin::Avatar*/}
                <div className="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                </div>
                {/*end::Avatar*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div className="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end" data-kt-element="message-text" />
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(template for out)*/}
          {/*begin::Message(template for in)*/}
          <div className="mb-10 d-flex justify-content-start d-none" data-kt-element="template-in">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-start">
              {/*begin::User*/}
              <div className="mb-2 d-flex align-items-center">
                {/*begin::Avatar*/}
                <div className="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                </div>
                {/*end::Avatar*/}
                {/*begin::Details*/}
                <div className="ms-3">
                  <a href="#" className="text-gray-900 fs-5 fw-bolder text-hover-primary me-1">Brian Cox</a>
                  <span className="mb-1 text-muted fs-7">Just now</span>
                </div>
                {/*end::Details*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div className="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">Right before vacation season we have the next Big Deal for you.</div>
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(template for in)*/}
        </div>
        {/*end::Messages*/}
      </div>
      {/*end::Card body*/}
      {/*begin::Card footer*/}
      <div className="pt-4 card-footer" id="kt_drawer_chat_messenger_footer">
        {/*begin::Input*/}
        <textarea className="mb-3 form-control form-control-flush" rows={1} data-kt-element="input" placeholder="Type a message" defaultValue={""} />
        {/*end::Input*/}
        {/*begin:Toolbar*/}
        <div className="d-flex flex-stack">
          {/*begin::Actions*/}
          <div className="d-flex align-items-center me-2">
            <button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon">
              <i className="bi bi-paperclip fs-3" />
            </button>
            <button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon">
              <i className="bi bi-upload fs-3" />
            </button>
          </div>
          {/*end::Actions*/}
          {/*begin::Send*/}
          <button className="btn btn-primary" type="button" data-kt-element="send">Send</button>
          {/*end::Send*/}
        </div>
        {/*end::Toolbar*/}
      </div>
      {/*end::Card footer*/}
    </div>
    {/*end::Messenger*/}
  </div>
  {/*end::Chat drawer*/}
  {/*end::Drawers*/}
  {/*end::Main*/}
  {/*begin::Engage toolbar*/}
  <div className="gap-2 px-5 mt-20 engage-toolbar d-flex position-fixed fw-bolder zindex-2 top-50 end-0 transform-90">
    {/*begin::Demos drawer toggle*/}
    <button id="kt_engage_demos_toggle" className="px-4 shadow-sm engage-demos-toggle btn btn-flex h-35px bg-body btn-color-gray-700 btn-active-color-gray-900 fs-6 rounded-top-0" title="Check out 22 more demos" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-dismiss="click" data-bs-trigger="hover">
      <span id="kt_engage_demos_label">Demos</span>
    </button>
    {/*end::Demos drawer toggle*/}
    {/*begin::Help drawer toggle*/}
    <button id="kt_help_toggle" className="px-5 shadow-sm engage-help-toggle btn btn-flex h-35px bg-body btn-color-gray-700 btn-active-color-gray-900 rounded-top-0" title="Learn & Get Inspired" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-dismiss="click" data-bs-trigger="hover">Help</button>
    {/*end::Help drawer toggle*/}
    {/*begin::Purchase link*/}
    <a href="https://1.envato.market/EA4JP" target="_blank" className="engage-purchase-link btn btn-color-gray-700 bg-body btn-active-color-gray-900' btn-flex h-35px px-5 shadow-sm rounded-top-0" rel="noreferrer">Buy now</a>
    {/*end::Purchase link*/}
  </div>
  {/*end::Engage toolbar*/}
  {/*begin::Scrolltop*/}
  <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
    {/*begin::Svg Icon | path: icons/duotune/arrows/arr066.svg*/}
    <span className="svg-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
        <rect opacity="0.5" x={13} y={6} width={13} height={2} rx={1} transform="rotate(90 13 6)" fill="currentColor" />
        <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="currentColor" />
      </svg>
    </span>
    {/*end::Svg Icon*/}
  </div>
  {/*end::Scrolltop*/}
  {/*begin::Modals*/}
  {/*begin::Modal - Upgrade plan*/}
  <div className="modal fade" id="kt_modal_upgrade_plan" tabIndex={-1} aria-hidden="true">
    {/*begin::Modal dialog*/}
    <div className="modal-dialog modal-xl">
      {/*begin::Modal content*/}
      <div className="rounded modal-content">
        {/*begin::Modal header*/}
        <div className="pb-0 border-0 modal-header justify-content-end">
          {/*begin::Close*/}
          <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
            <span className="svg-icon svg-icon-1">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="currentColor" />
                <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="currentColor" />
              </svg>
            </span>
            {/*end::Svg Icon*/}
          </div>
          {/*end::Close*/}
        </div>
        {/*end::Modal header*/}
        {/*begin::Modal body*/}
        <div className="px-5 pt-0 modal-body pb-15 px-xl-20">
          {/*begin::Heading*/}
          <div className="text-center mb-13">
            <h1 className="mb-3">Upgrade a Plan</h1>
            <div className="text-muted fw-bold fs-5">If you need more info, please check
              <a href="#" className="link-primary fw-bolder">Pricing Guidelines</a>.</div>
          </div>
          {/*end::Heading*/}
          {/*begin::Plans*/}
          <div className="d-flex flex-column">
            {/*begin::Nav group*/}
            <div className="mx-auto nav-group nav-group-outline" data-kt-buttons="true">
              <button className="px-6 py-3 btn btn-color-gray-400 btn-active btn-active-secondary me-2 active" data-kt-plan="month">Monthly</button>
              <button className="px-6 py-3 btn btn-color-gray-400 btn-active btn-active-secondary" data-kt-plan="annual">Annual</button>
            </div>
            {/*end::Nav group*/}
            {/*begin::Row*/}
            <div className="mt-10 row">
              {/*begin::Col*/}
              <div className="mb-10 col-lg-6 mb-lg-0">
                {/*begin::Tabs*/}
                <div className="nav flex-column">
                  {/*begin::Tab link*/}
                  <div className="p-6 mb-6 nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start active" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_startup">
                    {/*end::Description*/}
                    <div className="d-flex align-items-center me-2">
                      {/*begin::Radio*/}
                      <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                        <input className="form-check-input" type="radio" name="plan" defaultChecked="checked" defaultValue="startup" />
                      </div>
                      {/*end::Radio*/}
                      {/*begin::Info*/}
                      <div className="flex-grow-1">
                        <h2 className="flex-wrap d-flex align-items-center fs-2 fw-bolder">Startup</h2>
                        <div className="opacity-50 fw-bold">Best for startups</div>
                      </div>
                      {/*end::Info*/}
                    </div>
                    {/*end::Description*/}
                    {/*begin::Price*/}
                    <div className="ms-5">
                      <span className="mb-2">$</span>
                      <span className="fs-3x fw-bolder" data-kt-plan-price-month={39} data-kt-plan-price-annual={399}>39</span>
                      <span className="opacity-50 fs-7">/
                        <span data-kt-element="period">Mon</span></span>
                    </div>
                    {/*end::Price*/}
                  </div>
                  {/*end::Tab link*/}
                  {/*begin::Tab link*/}
                  <div className="p-6 mb-6 nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_advanced">
                    {/*end::Description*/}
                    <div className="d-flex align-items-center me-2">
                      {/*begin::Radio*/}
                      <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                        <input className="form-check-input" type="radio" name="plan" defaultValue="advanced" />
                      </div>
                      {/*end::Radio*/}
                      {/*begin::Info*/}
                      <div className="flex-grow-1">
                        <h2 className="flex-wrap d-flex align-items-center fs-2 fw-bolder">Advanced</h2>
                        <div className="opacity-50 fw-bold">Best for 100+ team size</div>
                      </div>
                      {/*end::Info*/}
                    </div>
                    {/*end::Description*/}
                    {/*begin::Price*/}
                    <div className="ms-5">
                      <span className="mb-2">$</span>
                      <span className="fs-3x fw-bolder" data-kt-plan-price-month={339} data-kt-plan-price-annual={3399}>339</span>
                      <span className="opacity-50 fs-7">/
                        <span data-kt-element="period">Mon</span></span>
                    </div>
                    {/*end::Price*/}
                  </div>
                  {/*end::Tab link*/}
                  {/*begin::Tab link*/}
                  <div className="p-6 mb-6 nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_enterprise">
                    {/*end::Description*/}
                    <div className="d-flex align-items-center me-2">
                      {/*begin::Radio*/}
                      <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                        <input className="form-check-input" type="radio" name="plan" defaultValue="enterprise" />
                      </div>
                      {/*end::Radio*/}
                      {/*begin::Info*/}
                      <div className="flex-grow-1">
                        <h2 className="flex-wrap d-flex align-items-center fs-2 fw-bolder">Enterprise
                          <span className="badge badge-light-success ms-2 fs-7">Most popular</span></h2>
                        <div className="opacity-50 fw-bold">Best value for 1000+ team</div>
                      </div>
                      {/*end::Info*/}
                    </div>
                    {/*end::Description*/}
                    {/*begin::Price*/}
                    <div className="ms-5">
                      <span className="mb-2">$</span>
                      <span className="fs-3x fw-bolder" data-kt-plan-price-month={999} data-kt-plan-price-annual={9999}>999</span>
                      <span className="opacity-50 fs-7">/
                        <span data-kt-element="period">Mon</span></span>
                    </div>
                    {/*end::Price*/}
                  </div>
                  {/*end::Tab link*/}
                  {/*begin::Tab link*/}
                  <div className="p-6 nav-link btn btn-outline btn-outline-dashed btn-color-dark d-flex flex-stack text-start">
                    {/*end::Description*/}
                    <div className="d-flex align-items-center me-2">
                      {/*begin::Radio*/}
                      <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                        <input className="form-check-input" type="radio" name="plan" defaultValue="custom" />
                      </div>
                      {/*end::Radio*/}
                      {/*begin::Info*/}
                      <div className="flex-grow-1">
                        <h2 className="flex-wrap d-flex align-items-center fs-2 fw-bolder">Custom</h2>
                        <div className="opacity-50 fw-bold">Requet a custom license</div>
                      </div>
                      {/*end::Info*/}
                    </div>
                    {/*end::Description*/}
                    {/*begin::Price*/}
                    <div className="ms-5">
                      <a href="#" className="btn btn-sm btn-primary">Contact Us</a>
                    </div>
                    {/*end::Price*/}
                  </div>
                  {/*end::Tab link*/}
                </div>
                {/*end::Tabs*/}
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col-lg-6">
                {/*begin::Tab content*/}
                <div className="p-10 rounded tab-content h-100 bg-light">
                  {/*begin::Tab Pane*/}
                  <div className="tab-pane fade show active" id="kt_upgrade_plan_startup">
                    {/*begin::Heading*/}
                    <div className="pb-5">
                      <h2 className="fw-bolder text-dark">What’s in Startup Plan?</h2>
                      <div className="text-muted fw-bold">Optimal for 10+ team size and new startup</div>
                    </div>
                    {/*end::Heading*/}
                    {/*begin::Body*/}
                    <div className="pt-1">
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="text-gray-700 fw-bold fs-5 flex-grow-1">Up to 10 Active Users</span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="text-gray-700 fw-bold fs-5 flex-grow-1">Up to 30 Project Integrations</span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="text-gray-700 fw-bold fs-5 flex-grow-1">Analytics Module</span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-bold fs-5 text-muted flex-grow-1">Finance Module</span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                        <span className="svg-icon svg-icon-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                            <rect x={7} y="15.3137" width={12} height={2} rx={1} transform="rotate(-45 7 15.3137)" fill="currentColor" />
                            <rect x="8.41422" y={7} width={12} height={2} rx={1} transform="rotate(45 8.41422 7)" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-bold fs-5 text-muted flex-grow-1">Accounting Module</span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                        <span className="svg-icon svg-icon-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                            <rect x={7} y="15.3137" width={12} height={2} rx={1} transform="rotate(-45 7 15.3137)" fill="currentColor" />
                            <rect x="8.41422" y={7} width={12} height={2} rx={1} transform="rotate(45 8.41422 7)" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-bold fs-5 text-muted flex-grow-1">Network Platform</span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                        <span className="svg-icon svg-icon-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                            <rect x={7} y="15.3137" width={12} height={2} rx={1} transform="rotate(-45 7 15.3137)" fill="currentColor" />
                            <rect x="8.41422" y={7} width={12} height={2} rx={1} transform="rotate(45 8.41422 7)" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center">
                        <span className="fw-bold fs-5 text-muted flex-grow-1">Unlimited Cloud Space</span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                        <span className="svg-icon svg-icon-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                            <rect x={7} y="15.3137" width={12} height={2} rx={1} transform="rotate(-45 7 15.3137)" fill="currentColor" />
                            <rect x="8.41422" y={7} width={12} height={2} rx={1} transform="rotate(45 8.41422 7)" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                    </div>
                    {/*end::Body*/}
                  </div>
                  {/*end::Tab Pane*/}
                  {/*begin::Tab Pane*/}
                  <div className="tab-pane fade" id="kt_upgrade_plan_advanced">
                    {/*begin::Heading*/}
                    <div className="pb-5">
                      <h2 className="fw-bolder text-dark">What’s in Startup Plan?</h2>
                      <div className="text-muted fw-bold">Optimal for 100+ team size and grown company</div>
                    </div>
                    {/*end::Heading*/}
                    {/*begin::Body*/}
                    <div className="pt-1">
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="text-gray-700 fw-bold fs-5 flex-grow-1">Up to 10 Active Users</span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="text-gray-700 fw-bold fs-5 flex-grow-1">Up to 30 Project Integrations</span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="text-gray-700 fw-bold fs-5 flex-grow-1">Analytics Module</span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="text-gray-700 fw-bold fs-5 flex-grow-1">Finance Module</span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="text-gray-700 fw-bold fs-5 flex-grow-1">Accounting Module</span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-bold fs-5 text-muted flex-grow-1">Network Platform</span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                        <span className="svg-icon svg-icon-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                            <rect x={7} y="15.3137" width={12} height={2} rx={1} transform="rotate(-45 7 15.3137)" fill="currentColor" />
                            <rect x="8.41422" y={7} width={12} height={2} rx={1} transform="rotate(45 8.41422 7)" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center">
                        <span className="fw-bold fs-5 text-muted flex-grow-1">Unlimited Cloud Space</span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen040.svg*/}
                        <span className="svg-icon svg-icon-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                            <rect x={7} y="15.3137" width={12} height={2} rx={1} transform="rotate(-45 7 15.3137)" fill="currentColor" />
                            <rect x="8.41422" y={7} width={12} height={2} rx={1} transform="rotate(45 8.41422 7)" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                    </div>
                    {/*end::Body*/}
                  </div>
                  {/*end::Tab Pane*/}
                  {/*begin::Tab Pane*/}
                  <div className="tab-pane fade" id="kt_upgrade_plan_enterprise">
                    {/*begin::Heading*/}
                    <div className="pb-5">
                      <h2 className="fw-bolder text-dark">What’s in Startup Plan?</h2>
                      <div className="text-muted fw-bold">Optimal for 1000+ team and enterpise</div>
                    </div>
                    {/*end::Heading*/}
                    {/*begin::Body*/}
                    <div className="pt-1">
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="text-gray-700 fw-bold fs-5 flex-grow-1">Up to 10 Active Users</span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="text-gray-700 fw-bold fs-5 flex-grow-1">Up to 30 Project Integrations</span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="text-gray-700 fw-bold fs-5 flex-grow-1">Analytics Module</span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="text-gray-700 fw-bold fs-5 flex-grow-1">Finance Module</span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="text-gray-700 fw-bold fs-5 flex-grow-1">Accounting Module</span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="text-gray-700 fw-bold fs-5 flex-grow-1">Network Platform</span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center">
                        <span className="text-gray-700 fw-bold fs-5 flex-grow-1">Unlimited Cloud Space</span>
                        {/*begin::Svg Icon | path: icons/duotune/general/gen043.svg*/}
                        <span className="svg-icon svg-icon-1 svg-icon-success">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.3" x={2} y={2} width={20} height={20} rx={10} fill="currentColor" />
                            <path d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}
                      </div>
                      {/*end::Item*/}
                    </div>
                    {/*end::Body*/}
                  </div>
                  {/*end::Tab Pane*/}
                </div>
                {/*end::Tab content*/}
              </div>
              {/*end::Col*/}
            </div>
            {/*end::Row*/}
          </div>
          {/*end::Plans*/}
          {/*begin::Actions*/}
          <div className="pt-12 d-flex flex-center flex-row-fluid">
            <button type="reset" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" className="btn btn-primary">Upgrade Plan</button>
          </div>
          {/*end::Actions*/}
        </div>
        {/*end::Modal body*/}
      </div>
      {/*end::Modal content*/}
    </div>
    {/*end::Modal dialog*/}
  </div>
  {/*end::Modal - Upgrade plan*/}
  {/*begin::Modal - Create App*/}
  <div className="modal fade" id="kt_modal_create_app" tabIndex={-1} aria-hidden="true">
    {/*begin::Modal dialog*/}
    <div className="modal-dialog modal-dialog-centered mw-900px">
      {/*begin::Modal content*/}
      <div className="modal-content">
        {/*begin::Modal header*/}
        <div className="modal-header">
          {/*begin::Modal title*/}
          <h2>Create App</h2>
          {/*end::Modal title*/}
          {/*begin::Close*/}
          <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
            <span className="svg-icon svg-icon-1">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="currentColor" />
                <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="currentColor" />
              </svg>
            </span>
            {/*end::Svg Icon*/}
          </div>
          {/*end::Close*/}
        </div>
        {/*end::Modal header*/}
        {/*begin::Modal body*/}
        <div className="modal-body py-lg-10 px-lg-10">
          {/*begin::Stepper*/}
          <div className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid" id="kt_modal_create_app_stepper">
            {/*begin::Aside*/}
            <div className="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
              {/*begin::Nav*/}
              <div className="stepper-nav ps-lg-10">
                {/*begin::Step 1*/}
                <div className="stepper-item current" data-kt-stepper-element="nav">
                  {/*begin::Line*/}
                  <div className="stepper-line w-40px" />
                  {/*end::Line*/}
                  {/*begin::Icon*/}
                  <div className="stepper-icon w-40px h-40px">
                    <i className="stepper-check fas fa-check" />
                    <span className="stepper-number">1</span>
                  </div>
                  {/*end::Icon*/}
                  {/*begin::Label*/}
                  <div className="stepper-label">
                    <h3 className="stepper-title">Details</h3>
                    <div className="stepper-desc">Name your App</div>
                  </div>
                  {/*end::Label*/}
                </div>
                {/*end::Step 1*/}
                {/*begin::Step 2*/}
                <div className="stepper-item" data-kt-stepper-element="nav">
                  {/*begin::Line*/}
                  <div className="stepper-line w-40px" />
                  {/*end::Line*/}
                  {/*begin::Icon*/}
                  <div className="stepper-icon w-40px h-40px">
                    <i className="stepper-check fas fa-check" />
                    <span className="stepper-number">2</span>
                  </div>
                  {/*begin::Icon*/}
                  {/*begin::Label*/}
                  <div className="stepper-label">
                    <h3 className="stepper-title">Frameworks</h3>
                    <div className="stepper-desc">Define your app framework</div>
                  </div>
                  {/*begin::Label*/}
                </div>
                {/*end::Step 2*/}
                {/*begin::Step 3*/}
                <div className="stepper-item" data-kt-stepper-element="nav">
                  {/*begin::Line*/}
                  <div className="stepper-line w-40px" />
                  {/*end::Line*/}
                  {/*begin::Icon*/}
                  <div className="stepper-icon w-40px h-40px">
                    <i className="stepper-check fas fa-check" />
                    <span className="stepper-number">3</span>
                  </div>
                  {/*end::Icon*/}
                  {/*begin::Label*/}
                  <div className="stepper-label">
                    <h3 className="stepper-title">Database</h3>
                    <div className="stepper-desc">Select the app database type</div>
                  </div>
                  {/*end::Label*/}
                </div>
                {/*end::Step 3*/}
                {/*begin::Step 4*/}
                <div className="stepper-item" data-kt-stepper-element="nav">
                  {/*begin::Line*/}
                  <div className="stepper-line w-40px" />
                  {/*end::Line*/}
                  {/*begin::Icon*/}
                  <div className="stepper-icon w-40px h-40px">
                    <i className="stepper-check fas fa-check" />
                    <span className="stepper-number">4</span>
                  </div>
                  {/*end::Icon*/}
                  {/*begin::Label*/}
                  <div className="stepper-label">
                    <h3 className="stepper-title">Billing</h3>
                    <div className="stepper-desc">Provide payment details</div>
                  </div>
                  {/*end::Label*/}
                </div>
                {/*end::Step 4*/}
                {/*begin::Step 5*/}
                <div className="stepper-item" data-kt-stepper-element="nav">
                  {/*begin::Line*/}
                  <div className="stepper-line w-40px" />
                  {/*end::Line*/}
                  {/*begin::Icon*/}
                  <div className="stepper-icon w-40px h-40px">
                    <i className="stepper-check fas fa-check" />
                    <span className="stepper-number">5</span>
                  </div>
                  {/*end::Icon*/}
                  {/*begin::Label*/}
                  <div className="stepper-label">
                    <h3 className="stepper-title">Completed</h3>
                    <div className="stepper-desc">Review and Submit</div>
                  </div>
                  {/*end::Label*/}
                </div>
                {/*end::Step 5*/}
              </div>
              {/*end::Nav*/}
            </div>
            {/*begin::Aside*/}
            {/*begin::Content*/}
            <div className="flex-row-fluid py-lg-5 px-lg-15">
              {/*begin::Form*/}
              <form className="form" noValidate="novalidate" id="kt_modal_create_app_form">
                {/*begin::Step 1*/}
                <div className="current" data-kt-stepper-element="content">
                  <div className="w-100">
                    {/*begin::Input group*/}
                    <div className="mb-10 fv-row">
                      {/*begin::Label*/}
                      <label className="mb-2 d-flex align-items-center fs-5 fw-bold">
                        <span className="required">App Name</span>
                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your unique app name" />
                      </label>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <input type="text" className="form-control form-control-lg form-control-solid" name="name" placeholder defaultValue />
                      {/*end::Input*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="fv-row">
                      {/*begin::Label*/}
                      <label className="mb-4 d-flex align-items-center fs-5 fw-bold">
                        <span className="required">Category</span>
                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Select your app category" />
                      </label>
                      {/*end::Label*/}
                      {/*begin:Options*/}
                      <div className="fv-row">
                        {/*begin:Option*/}
                        <label className="mb-5 cursor-pointer d-flex flex-stack">
                          {/*begin:Label*/}
                          <span className="d-flex align-items-center me-2">
                            {/*begin:Icon*/}
                            <span className="symbol symbol-50px me-6">
                              <span className="symbol-label bg-light-primary">
                                {/*begin::Svg Icon | path: icons/duotune/maps/map004.svg*/}
                                <span className="svg-icon svg-icon-1 svg-icon-primary">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.3" d="M18.4 5.59998C21.9 9.09998 21.9 14.8 18.4 18.3C14.9 21.8 9.2 21.8 5.7 18.3L18.4 5.59998Z" fill="currentColor" />
                                    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM19.9 11H13V8.8999C14.9 8.6999 16.7 8.00005 18.1 6.80005C19.1 8.00005 19.7 9.4 19.9 11ZM11 19.8999C9.7 19.6999 8.39999 19.2 7.39999 18.5C8.49999 17.7 9.7 17.2001 11 17.1001V19.8999ZM5.89999 6.90002C7.39999 8.10002 9.2 8.8 11 9V11.1001H4.10001C4.30001 9.4001 4.89999 8.00002 5.89999 6.90002ZM7.39999 5.5C8.49999 4.7 9.7 4.19998 11 4.09998V7C9.7 6.8 8.39999 6.3 7.39999 5.5ZM13 17.1001C14.3 17.3001 15.6 17.8 16.6 18.5C15.5 19.3 14.3 19.7999 13 19.8999V17.1001ZM13 4.09998C14.3 4.29998 15.6 4.8 16.6 5.5C15.5 6.3 14.3 6.80002 13 6.90002V4.09998ZM4.10001 13H11V15.1001C9.1 15.3001 7.29999 16 5.89999 17.2C4.89999 16 4.30001 14.6 4.10001 13ZM18.1 17.1001C16.6 15.9001 14.8 15.2 13 15V12.8999H19.9C19.7 14.5999 19.1 16.0001 18.1 17.1001Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </span>
                            {/*end:Icon*/}
                            {/*begin:Info*/}
                            <span className="d-flex flex-column">
                              <span className="fw-bolder fs-6">Quick Online Courses</span>
                              <span className="fs-7 text-muted">Creating a clear text structure is just one SEO</span>
                            </span>
                            {/*end:Info*/}
                          </span>
                          {/*end:Label*/}
                          {/*begin:Input*/}
                          <span className="form-check form-check-custom form-check-solid">
                            <input className="form-check-input" type="radio" name="category" defaultValue={1} />
                          </span>
                          {/*end:Input*/}
                        </label>
                        {/*end::Option*/}
                        {/*begin:Option*/}
                        <label className="mb-5 cursor-pointer d-flex flex-stack">
                          {/*begin:Label*/}
                          <span className="d-flex align-items-center me-2">
                            {/*begin:Icon*/}
                            <span className="symbol symbol-50px me-6">
                              <span className="symbol-label bg-light-danger">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                <span className="svg-icon svg-icon-1 svg-icon-danger">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                    <rect x={2} y={2} width={9} height={9} rx={2} fill="currentColor" />
                                    <rect opacity="0.3" x={13} y={2} width={9} height={9} rx={2} fill="currentColor" />
                                    <rect opacity="0.3" x={13} y={13} width={9} height={9} rx={2} fill="currentColor" />
                                    <rect opacity="0.3" x={2} y={13} width={9} height={9} rx={2} fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </span>
                            {/*end:Icon*/}
                            {/*begin:Info*/}
                            <span className="d-flex flex-column">
                              <span className="fw-bolder fs-6">Face to Face Discussions</span>
                              <span className="fs-7 text-muted">Creating a clear text structure is just one aspect</span>
                            </span>
                            {/*end:Info*/}
                          </span>
                          {/*end:Label*/}
                          {/*begin:Input*/}
                          <span className="form-check form-check-custom form-check-solid">
                            <input className="form-check-input" type="radio" name="category" defaultValue={2} />
                          </span>
                          {/*end:Input*/}
                        </label>
                        {/*end::Option*/}
                        {/*begin:Option*/}
                        <label className="cursor-pointer d-flex flex-stack">
                          {/*begin:Label*/}
                          <span className="d-flex align-items-center me-2">
                            {/*begin:Icon*/}
                            <span className="symbol symbol-50px me-6">
                              <span className="symbol-label bg-light-success">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen013.svg*/}
                                <span className="svg-icon svg-icon-1 svg-icon-success">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.3" d="M20.9 12.9C20.3 12.9 19.9 12.5 19.9 11.9C19.9 11.3 20.3 10.9 20.9 10.9H21.8C21.3 6.2 17.6 2.4 12.9 2V2.9C12.9 3.5 12.5 3.9 11.9 3.9C11.3 3.9 10.9 3.5 10.9 2.9V2C6.19999 2.5 2.4 6.2 2 10.9H2.89999C3.49999 10.9 3.89999 11.3 3.89999 11.9C3.89999 12.5 3.49999 12.9 2.89999 12.9H2C2.5 17.6 6.19999 21.4 10.9 21.8V20.9C10.9 20.3 11.3 19.9 11.9 19.9C12.5 19.9 12.9 20.3 12.9 20.9V21.8C17.6 21.3 21.4 17.6 21.8 12.9H20.9Z" fill="currentColor" />
                                    <path d="M16.9 10.9H13.6C13.4 10.6 13.2 10.4 12.9 10.2V5.90002C12.9 5.30002 12.5 4.90002 11.9 4.90002C11.3 4.90002 10.9 5.30002 10.9 5.90002V10.2C10.6 10.4 10.4 10.6 10.2 10.9H9.89999C9.29999 10.9 8.89999 11.3 8.89999 11.9C8.89999 12.5 9.29999 12.9 9.89999 12.9H10.2C10.4 13.2 10.6 13.4 10.9 13.6V13.9C10.9 14.5 11.3 14.9 11.9 14.9C12.5 14.9 12.9 14.5 12.9 13.9V13.6C13.2 13.4 13.4 13.2 13.6 12.9H16.9C17.5 12.9 17.9 12.5 17.9 11.9C17.9 11.3 17.5 10.9 16.9 10.9Z" fill="currentColor" />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </span>
                            {/*end:Icon*/}
                            {/*begin:Info*/}
                            <span className="d-flex flex-column">
                              <span className="fw-bolder fs-6">Full Intro Training</span>
                              <span className="fs-7 text-muted">Creating a clear text structure copywriting</span>
                            </span>
                            {/*end:Info*/}
                          </span>
                          {/*end:Label*/}
                          {/*begin:Input*/}
                          <span className="form-check form-check-custom form-check-solid">
                            <input className="form-check-input" type="radio" name="category" defaultValue={3} />
                          </span>
                          {/*end:Input*/}
                        </label>
                        {/*end::Option*/}
                      </div>
                      {/*end:Options*/}
                    </div>
                    {/*end::Input group*/}
                  </div>
                </div>
                {/*end::Step 1*/}
                {/*begin::Step 2*/}
                <div data-kt-stepper-element="content">
                  <div className="w-100">
                    {/*begin::Input group*/}
                    <div className="fv-row">
                      {/*begin::Label*/}
                      <label className="mb-4 d-flex align-items-center fs-5 fw-bold">
                        <span className="required">Select Framework</span>
                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your apps framework" />
                      </label>
                      {/*end::Label*/}
                      {/*begin:Option*/}
                      <label className="mb-5 cursor-pointer d-flex flex-stack">
                        {/*begin:Label*/}
                        <span className="d-flex align-items-center me-2">
                          {/*begin:Icon*/}
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-warning">
                              <i className="fab fa-html5 text-warning fs-2x" />
                            </span>
                          </span>
                          {/*end:Icon*/}
                          {/*begin:Info*/}
                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">HTML5</span>
                            <span className="fs-7 text-muted">Base Web Projec</span>
                          </span>
                          {/*end:Info*/}
                        </span>
                        {/*end:Label*/}
                        {/*begin:Input*/}
                        <span className="form-check form-check-custom form-check-solid">
                          <input className="form-check-input" type="radio" defaultChecked="checked" name="framework" defaultValue={1} />
                        </span>
                        {/*end:Input*/}
                      </label>
                      {/*end::Option*/}
                      {/*begin:Option*/}
                      <label className="mb-5 cursor-pointer d-flex flex-stack">
                        {/*begin:Label*/}
                        <span className="d-flex align-items-center me-2">
                          {/*begin:Icon*/}
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-success">
                              <i className="fab fa-react text-success fs-2x" />
                            </span>
                          </span>
                          {/*end:Icon*/}
                          {/*begin:Info*/}
                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">ReactJS</span>
                            <span className="fs-7 text-muted">Robust and flexible app framework</span>
                          </span>
                          {/*end:Info*/}
                        </span>
                        {/*end:Label*/}
                        {/*begin:Input*/}
                        <span className="form-check form-check-custom form-check-solid">
                          <input className="form-check-input" type="radio" name="framework" defaultValue={2} />
                        </span>
                        {/*end:Input*/}
                      </label>
                      {/*end::Option*/}
                      {/*begin:Option*/}
                      <label className="mb-5 cursor-pointer d-flex flex-stack">
                        {/*begin:Label*/}
                        <span className="d-flex align-items-center me-2">
                          {/*begin:Icon*/}
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-danger">
                              <i className="fab fa-angular text-danger fs-2x" />
                            </span>
                          </span>
                          {/*end:Icon*/}
                          {/*begin:Info*/}
                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">Angular</span>
                            <span className="fs-7 text-muted">Powerful data mangement</span>
                          </span>
                          {/*end:Info*/}
                        </span>
                        {/*end:Label*/}
                        {/*begin:Input*/}
                        <span className="form-check form-check-custom form-check-solid">
                          <input className="form-check-input" type="radio" name="framework" defaultValue={3} />
                        </span>
                        {/*end:Input*/}
                      </label>
                      {/*end::Option*/}
                      {/*begin:Option*/}
                      <label className="cursor-pointer d-flex flex-stack">
                        {/*begin:Label*/}
                        <span className="d-flex align-items-center me-2">
                          {/*begin:Icon*/}
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-primary">
                              <i className="fab fa-vuejs text-primary fs-2x" />
                            </span>
                          </span>
                          {/*end:Icon*/}
                          {/*begin:Info*/}
                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">Vue</span>
                            <span className="fs-7 text-muted">Lightweight and responsive framework</span>
                          </span>
                          {/*end:Info*/}
                        </span>
                        {/*end:Label*/}
                        {/*begin:Input*/}
                        <span className="form-check form-check-custom form-check-solid">
                          <input className="form-check-input" type="radio" name="framework" defaultValue={4} />
                        </span>
                        {/*end:Input*/}
                      </label>
                      {/*end::Option*/}
                    </div>
                    {/*end::Input group*/}
                  </div>
                </div>
                {/*end::Step 2*/}
                {/*begin::Step 3*/}
                <div data-kt-stepper-element="content">
                  <div className="w-100">
                    {/*begin::Input group*/}
                    <div className="mb-10 fv-row">
                      {/*begin::Label*/}
                      <label className="mb-2 required fs-5 fw-bold">Database Name</label>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <input type="text" className="form-control form-control-lg form-control-solid" name="dbname" placeholder defaultValue="master_db" />
                      {/*end::Input*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="fv-row">
                      {/*begin::Label*/}
                      <label className="mb-4 d-flex align-items-center fs-5 fw-bold">
                        <span className="required">Select Database Engine</span>
                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Select your app database engine" />
                      </label>
                      {/*end::Label*/}
                      {/*begin:Option*/}
                      <label className="mb-5 cursor-pointer d-flex flex-stack">
                        {/*begin::Label*/}
                        <span className="d-flex align-items-center me-2">
                          {/*begin::Icon*/}
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-success">
                              <i className="fas fa-database text-success fs-2x" />
                            </span>
                          </span>
                          {/*end::Icon*/}
                          {/*begin::Info*/}
                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">MySQL</span>
                            <span className="fs-7 text-muted">Basic MySQL database</span>
                          </span>
                          {/*end::Info*/}
                        </span>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <span className="form-check form-check-custom form-check-solid">
                          <input className="form-check-input" type="radio" name="dbengine" defaultChecked="checked" defaultValue={1} />
                        </span>
                        {/*end::Input*/}
                      </label>
                      {/*end::Option*/}
                      {/*begin:Option*/}
                      <label className="mb-5 cursor-pointer d-flex flex-stack">
                        {/*begin::Label*/}
                        <span className="d-flex align-items-center me-2">
                          {/*begin::Icon*/}
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-danger">
                              <i className="fab fa-google text-danger fs-2x" />
                            </span>
                          </span>
                          {/*end::Icon*/}
                          {/*begin::Info*/}
                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">Firebase</span>
                            <span className="fs-7 text-muted">Google based app data management</span>
                          </span>
                          {/*end::Info*/}
                        </span>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <span className="form-check form-check-custom form-check-solid">
                          <input className="form-check-input" type="radio" name="dbengine" defaultValue={2} />
                        </span>
                        {/*end::Input*/}
                      </label>
                      {/*end::Option*/}
                      {/*begin:Option*/}
                      <label className="cursor-pointer d-flex flex-stack">
                        {/*begin::Label*/}
                        <span className="d-flex align-items-center me-2">
                          {/*begin::Icon*/}
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-warning">
                              <i className="fab fa-amazon text-warning fs-2x" />
                            </span>
                          </span>
                          {/*end::Icon*/}
                          {/*begin::Info*/}
                          <span className="d-flex flex-column">
                            <span className="fw-bolder fs-6">DynamoDB</span>
                            <span className="fs-7 text-muted">Amazon Fast NoSQL Database</span>
                          </span>
                          {/*end::Info*/}
                        </span>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <span className="form-check form-check-custom form-check-solid">
                          <input className="form-check-input" type="radio" name="dbengine" defaultValue={3} />
                        </span>
                        {/*end::Input*/}
                      </label>
                      {/*end::Option*/}
                    </div>
                    {/*end::Input group*/}
                  </div>
                </div>
                {/*end::Step 3*/}
                {/*begin::Step 4*/}
                <div data-kt-stepper-element="content">
                  <div className="w-100">
                    {/*begin::Input group*/}
                    <div className="d-flex flex-column mb-7 fv-row">
                      {/*begin::Label*/}
                      <label className="mb-2 d-flex align-items-center fs-6 fw-bold form-label">
                        <span className="required">Name On Card</span>
                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a card holder's name" />
                      </label>
                      {/*end::Label*/}
                      <input type="text" className="form-control form-control-solid" placeholder name="card_name" defaultValue="Max Doe" />
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="d-flex flex-column mb-7 fv-row">
                      {/*begin::Label*/}
                      <label className="mb-2 required fs-6 fw-bold form-label">Card Number</label>
                      {/*end::Label*/}
                      {/*begin::Input wrapper*/}
                      <div className="position-relative">
                        {/*begin::Input*/}
                        <input type="text" className="form-control form-control-solid" placeholder="Enter card number" name="card_number" defaultValue="4111 1111 1111 1111" />
                        {/*end::Input*/}
                        {/*begin::Card logos*/}
                        <div className="position-absolute translate-middle-y top-50 end-0 me-5">
                          <img src="assets/media/svg/card-logos/visa.svg" alt className="h-25px" />
                          <img src="assets/media/svg/card-logos/mastercard.svg" alt className="h-25px" />
                          <img src="assets/media/svg/card-logos/american-express.svg" alt className="h-25px" />
                        </div>
                        {/*end::Card logos*/}
                      </div>
                      {/*end::Input wrapper*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="mb-10 row">
                      {/*begin::Col*/}
                      <div className="col-md-8 fv-row">
                        {/*begin::Label*/}
                        <label className="mb-2 required fs-6 fw-bold form-label">Expiration Date</label>
                        {/*end::Label*/}
                        {/*begin::Row*/}
                        <div className="row fv-row">
                          {/*begin::Col*/}
                          <div className="col-6">
                            <select name="card_expiry_month" className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Month">
                              <option />
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value={7}>7</option>
                              <option value={8}>8</option>
                              <option value={9}>9</option>
                              <option value={10}>10</option>
                              <option value={11}>11</option>
                              <option value={12}>12</option>
                            </select>
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-6">
                            <select name="card_expiry_year" className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Year">
                              <option />
                              <option value={2022}>2022</option>
                              <option value={2023}>2023</option>
                              <option value={2024}>2024</option>
                              <option value={2025}>2025</option>
                              <option value={2026}>2026</option>
                              <option value={2027}>2027</option>
                              <option value={2028}>2028</option>
                              <option value={2029}>2029</option>
                              <option value={2030}>2030</option>
                              <option value={2031}>2031</option>
                              <option value={2032}>2032</option>
                            </select>
                          </div>
                          {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-md-4 fv-row">
                        {/*begin::Label*/}
                        <label className="mb-2 d-flex align-items-center fs-6 fw-bold form-label">
                          <span className="required">CVV</span>
                          <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Enter a card CVV code" />
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input wrapper*/}
                        <div className="position-relative">
                          {/*begin::Input*/}
                          <input type="text" className="form-control form-control-solid" minLength={3} maxLength={4} placeholder="CVV" name="card_cvv" />
                          {/*end::Input*/}
                          {/*begin::CVV icon*/}
                          <div className="position-absolute translate-middle-y top-50 end-0 me-3">
                            {/*begin::Svg Icon | path: icons/duotune/finance/fin002.svg*/}
                            <span className="svg-icon svg-icon-2hx">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path d="M22 7H2V11H22V7Z" fill="currentColor" />
                                <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z" fill="currentColor" />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}
                          </div>
                          {/*end::CVV icon*/}
                        </div>
                        {/*end::Input wrapper*/}
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="d-flex flex-stack">
                      {/*begin::Label*/}
                      <div className="me-5">
                        <label className="fs-6 fw-bold form-label">Save Card for further billing?</label>
                        <div className="fs-7 fw-bold text-muted">If you need more info, please check budget planning</div>
                      </div>
                      {/*end::Label*/}
                      {/*begin::Switch*/}
                      <label className="form-check form-switch form-check-custom form-check-solid">
                        <input className="form-check-input" type="checkbox" defaultValue={1} defaultChecked="checked" />
                        <span className="form-check-label fw-bold text-muted">Save Card</span>
                      </label>
                      {/*end::Switch*/}
                    </div>
                    {/*end::Input group*/}
                  </div>
                </div>
                {/*end::Step 4*/}
                {/*begin::Step 5*/}
                <div data-kt-stepper-element="content">
                  <div className="text-center w-100">
                    {/*begin::Heading*/}
                    <h1 className="mb-3 fw-bolder text-dark">Release!</h1>
                    {/*end::Heading*/}
                    {/*begin::Description*/}
                    <div className="text-muted fw-bold fs-3">Submit your app to kickstart your project.</div>
                    {/*end::Description*/}
                    {/*begin::Illustration*/}
                    <div className="px-4 text-center py-15">
                      <img src="assets/media/illustrations/sketchy-1/9.png" alt className="mw-100 mh-300px" />
                    </div>
                    {/*end::Illustration*/}
                  </div>
                </div>
                {/*end::Step 5*/}
                {/*begin::Actions*/}
                <div className="pt-10 d-flex flex-stack">
                  {/*begin::Wrapper*/}
                  <div className="me-2">
                    <button type="button" className="btn btn-lg btn-light-primary me-3" data-kt-stepper-action="previous">
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr063.svg*/}
                      <span className="svg-icon svg-icon-3 me-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                          <rect opacity="0.5" x={6} y={11} width={13} height={2} rx={1} fill="currentColor" />
                          <path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}Back</button>
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Wrapper*/}
                  <div>
                    <button type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="submit">
                      <span className="indicator-label">Submit
                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                        <span className="svg-icon svg-icon-3 ms-2 me-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="currentColor" />
                            <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                          </svg>
                        </span>
                        {/*end::Svg Icon*/}</span>
                      <span className="indicator-progress">Please wait...
                        <span className="align-middle spinner-border spinner-border-sm ms-2" /></span>
                    </button>
                    <button type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="next">Continue
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                      <span className="svg-icon svg-icon-3 ms-1 me-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                          <rect opacity="0.5" x={18} y={13} width={13} height={2} rx={1} transform="rotate(-180 18 13)" fill="currentColor" />
                          <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}</button>
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Actions*/}
              </form>
              {/*end::Form*/}
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Stepper*/}
        </div>
        {/*end::Modal body*/}
      </div>
      {/*end::Modal content*/}
    </div>
    {/*end::Modal dialog*/}
  </div>
  {/*end::Modal - Create App*/}
  {/*begin::Modal - Invite Friends*/}
  <div className="modal fade" id="kt_modal_invite_friends" tabIndex={-1} aria-hidden="true">
    {/*begin::Modal dialog*/}
    <div className="modal-dialog mw-650px">
      {/*begin::Modal content*/}
      <div className="modal-content">
        {/*begin::Modal header*/}
        <div className="pb-0 border-0 modal-header justify-content-end">
          {/*begin::Close*/}
          <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
            <span className="svg-icon svg-icon-1">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="currentColor" />
                <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="currentColor" />
              </svg>
            </span>
            {/*end::Svg Icon*/}
          </div>
          {/*end::Close*/}
        </div>
        {/*begin::Modal header*/}
        {/*begin::Modal body*/}
        <div className="pt-0 mx-5 modal-body scroll-y mx-xl-18 pb-15">
          {/*begin::Heading*/}
          <div className="text-center mb-13">
            {/*begin::Title*/}
            <h1 className="mb-3">Invite a Friend</h1>
            {/*end::Title*/}
            {/*begin::Description*/}
            <div className="text-muted fw-bold fs-5">If you need more info, please check out
              <a href="#" className="link-primary fw-bolder">FAQ Page</a>.</div>
            {/*end::Description*/}
          </div>
          {/*end::Heading*/}
          {/*begin::Google Contacts Invite*/}
          <div className="mb-8 btn btn-light-primary fw-bolder w-100">
            <img alt="Logo" src="assets/media/svg/brand-logos/google-icon.svg" className="h-20px me-3" />Invite Gmail Contacts</div>
          {/*end::Google Contacts Invite*/}
          {/*begin::Separator*/}
          <div className="mb-8 separator d-flex flex-center">
            <span className="px-3 text-uppercase bg-body fs-7 fw-bold text-muted">or</span>
          </div>
          {/*end::Separator*/}
          {/*begin::Textarea*/}
          <textarea className="mb-8 form-control form-control-solid" rows={3} placeholder="Type or paste emails here" defaultValue={""} />
          {/*end::Textarea*/}
          {/*begin::Users*/}
          <div className="mb-10">
            {/*begin::Heading*/}
            <div className="mb-2 fs-6 fw-bold">Your Invitations</div>
            {/*end::Heading*/}
            {/*begin::List*/}
            <div className="mh-300px scroll-y me-n7 pe-7">
              {/*begin::User*/}
              <div className="py-4 border-gray-300 d-flex flex-stack border-bottom border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Emma Smith</a>
                    <div className="fw-bold text-muted">smith@kpmg.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                    <option value={1}>Guest</option>
                    <option value={2} selected="selected">Owner</option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="py-4 border-gray-300 d-flex flex-stack border-bottom border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <span className="symbol-label bg-light-danger text-danger fw-bold">M</span>
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Melody Macy</a>
                    <div className="fw-bold text-muted">melody@altbox.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                    <option value={1} selected="selected">Guest</option>
                    <option value={2}>Owner</option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="py-4 border-gray-300 d-flex flex-stack border-bottom border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Max Smith</a>
                    <div className="fw-bold text-muted">max@kt.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                    <option value={1}>Guest</option>
                    <option value={2}>Owner</option>
                    <option value={3} selected="selected">Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="py-4 border-gray-300 d-flex flex-stack border-bottom border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Sean Bean</a>
                    <div className="fw-bold text-muted">sean@dellito.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                    <option value={1}>Guest</option>
                    <option value={2} selected="selected">Owner</option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="py-4 border-gray-300 d-flex flex-stack border-bottom border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Brian Cox</a>
                    <div className="fw-bold text-muted">brian@exchange.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                    <option value={1}>Guest</option>
                    <option value={2}>Owner</option>
                    <option value={3} selected="selected">Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="py-4 border-gray-300 d-flex flex-stack border-bottom border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <span className="symbol-label bg-light-warning text-warning fw-bold">C</span>
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Mikaela Collins</a>
                    <div className="fw-bold text-muted">mik@pex.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                    <option value={1}>Guest</option>
                    <option value={2} selected="selected">Owner</option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="py-4 border-gray-300 d-flex flex-stack border-bottom border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Francis Mitcham</a>
                    <div className="fw-bold text-muted">f.mit@kpmg.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                    <option value={1}>Guest</option>
                    <option value={2}>Owner</option>
                    <option value={3} selected="selected">Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="py-4 border-gray-300 d-flex flex-stack border-bottom border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <span className="symbol-label bg-light-danger text-danger fw-bold">O</span>
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Olivia Wild</a>
                    <div className="fw-bold text-muted">olivia@corpmail.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                    <option value={1}>Guest</option>
                    <option value={2} selected="selected">Owner</option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="py-4 border-gray-300 d-flex flex-stack border-bottom border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <span className="symbol-label bg-light-primary text-primary fw-bold">N</span>
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Neil Owen</a>
                    <div className="fw-bold text-muted">owen.neil@gmail.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                    <option value={1} selected="selected">Guest</option>
                    <option value={2}>Owner</option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="py-4 border-gray-300 d-flex flex-stack border-bottom border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-23.jpg" />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Dan Wilson</a>
                    <div className="fw-bold text-muted">dam@consilting.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                    <option value={1}>Guest</option>
                    <option value={2}>Owner</option>
                    <option value={3} selected="selected">Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="py-4 border-gray-300 d-flex flex-stack border-bottom border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <span className="symbol-label bg-light-danger text-danger fw-bold">E</span>
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Emma Bold</a>
                    <div className="fw-bold text-muted">emma@intenso.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                    <option value={1}>Guest</option>
                    <option value={2} selected="selected">Owner</option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="py-4 border-gray-300 d-flex flex-stack border-bottom border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-12.jpg" />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Ana Crown</a>
                    <div className="fw-bold text-muted">ana.cf@limtel.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                    <option value={1} selected="selected">Guest</option>
                    <option value={2}>Owner</option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="py-4 border-gray-300 d-flex flex-stack border-bottom border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <span className="symbol-label bg-light-info text-info fw-bold">A</span>
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Robert Doe</a>
                    <div className="fw-bold text-muted">robert@benko.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                    <option value={1}>Guest</option>
                    <option value={2}>Owner</option>
                    <option value={3} selected="selected">Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="py-4 border-gray-300 d-flex flex-stack border-bottom border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-13.jpg" />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">John Miller</a>
                    <div className="fw-bold text-muted">miller@mapple.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                    <option value={1}>Guest</option>
                    <option value={2}>Owner</option>
                    <option value={3} selected="selected">Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="py-4 border-gray-300 d-flex flex-stack border-bottom border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <span className="symbol-label bg-light-success text-success fw-bold">L</span>
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Lucy Kunic</a>
                    <div className="fw-bold text-muted">lucy.m@fentech.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                    <option value={1}>Guest</option>
                    <option value={2} selected="selected">Owner</option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="py-4 border-gray-300 d-flex flex-stack border-bottom border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img alt="Pic" src="assets/media/avatars/300-21.jpg" />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Ethan Wilder</a>
                    <div className="fw-bold text-muted">ethan@loop.com.au</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                    <option value={1} selected="selected">Guest</option>
                    <option value={2}>Owner</option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="py-4 d-flex flex-stack">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <span className="symbol-label bg-light-warning text-warning fw-bold">C</span>
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Mikaela Collins</a>
                    <div className="fw-bold text-muted">mik@pex.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                    <option value={1}>Guest</option>
                    <option value={2}>Owner</option>
                    <option value={3} selected="selected">Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
            </div>
            {/*end::List*/}
          </div>
          {/*end::Users*/}
          {/*begin::Notice*/}
          <div className="d-flex flex-stack">
            {/*begin::Label*/}
            <div className="me-5 fw-bold">
              <label className="fs-6">Adding Users by Team Members</label>
              <div className="fs-7 text-muted">If you need more info, please check budget planning</div>
            </div>
            {/*end::Label*/}
            {/*begin::Switch*/}
            <label className="form-check form-switch form-check-custom form-check-solid">
              <input className="form-check-input" type="checkbox" defaultValue={1} defaultChecked="checked" />
              <span className="form-check-label fw-bold text-muted">Allowed</span>
            </label>
            {/*end::Switch*/}
          </div>
          {/*end::Notice*/}
        </div>
        {/*end::Modal body*/}
      </div>
      {/*end::Modal content*/}
    </div>
    {/*end::Modal dialog*/}
  </div>
  {/*end::Modal - Invite Friend*/}
  {/*begin::Modal - Users Search*/}
  <div className="modal fade" id="kt_modal_users_search" tabIndex={-1} aria-hidden="true">
    {/*begin::Modal dialog*/}
    <div className="modal-dialog modal-dialog-centered mw-650px">
      {/*begin::Modal content*/}
      <div className="modal-content">
        {/*begin::Modal header*/}
        <div className="pb-0 border-0 modal-header justify-content-end">
          {/*begin::Close*/}
          <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
            <span className="svg-icon svg-icon-1">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="currentColor" />
                <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="currentColor" />
              </svg>
            </span>
            {/*end::Svg Icon*/}
          </div>
          {/*end::Close*/}
        </div>
        {/*begin::Modal header*/}
        {/*begin::Modal body*/}
        <div className="pt-0 mx-5 modal-body scroll-y mx-xl-18 pb-15">
          {/*begin::Content*/}
          <div className="text-center mb-13">
            <h1 className="mb-3">Search Users</h1>
            <div className="text-muted fw-bold fs-5">Invite Collaborators To Your Project</div>
          </div>
          {/*end::Content*/}
          {/*begin::Search*/}
          <div id="kt_modal_users_search_handler" data-kt-search-keypress="true" data-kt-search-min-length={2} data-kt-search-enter="enter" data-kt-search-layout="inline">
            {/*begin::Form*/}
            <form data-kt-search-element="form" className="mb-5 w-100 position-relative" autoComplete="off">
              {/*begin::Hidden input(Added to disable form autocomplete)*/}
              <input type="hidden" />
              {/*end::Hidden input*/}
              {/*begin::Icon*/}
              {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
              <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height={2} rx={1} transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                  <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
                </svg>
              </span>
              {/*end::Svg Icon*/}
              {/*end::Icon*/}
              {/*begin::Input*/}
              <input type="text" className="form-control form-control-lg form-control-solid px-15" name="search" defaultValue placeholder="Search by username, full name or email..." data-kt-search-element="input" />
              {/*end::Input*/}
              {/*begin::Spinner*/}
              <span className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5" data-kt-search-element="spinner">
                <span className="align-middle spinner-border h-15px w-15px text-muted" />
              </span>
              {/*end::Spinner*/}
              {/*begin::Reset*/}
              <span className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none" data-kt-search-element="clear">
                {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                <span className="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.5" x={6} y="17.3137" width={16} height={2} rx={1} transform="rotate(-45 6 17.3137)" fill="currentColor" />
                    <rect x="7.41422" y={6} width={16} height={2} rx={1} transform="rotate(45 7.41422 6)" fill="currentColor" />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
              </span>
              {/*end::Reset*/}
            </form>
            {/*end::Form*/}
            {/*begin::Wrapper*/}
            <div className="py-5">
              {/*begin::Suggestions*/}
              <div data-kt-search-element="suggestions">
                {/*begin::Heading*/}
                <h3 className="mb-5 fw-bold">Recently searched:</h3>
                {/*end::Heading*/}
                {/*begin::Users*/}
                <div className="mh-375px scroll-y me-n7 pe-7">
                  {/*begin::User*/}
                  <a href="#" className="p-3 mb-1 rounded d-flex align-items-center bg-state-light bg-state-opacity-50">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-35px symbol-circle me-5">
                      <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Info*/}
                    <div className="fw-bold">
                      <span className="text-gray-800 fs-6 me-2">Emma Smith</span>
                      <span className="badge badge-light">Art Director</span>
                    </div>
                    {/*end::Info*/}
                  </a>
                  {/*end::User*/}
                  {/*begin::User*/}
                  <a href="#" className="p-3 mb-1 rounded d-flex align-items-center bg-state-light bg-state-opacity-50">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-35px symbol-circle me-5">
                      <span className="symbol-label bg-light-danger text-danger fw-bold">M</span>
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Info*/}
                    <div className="fw-bold">
                      <span className="text-gray-800 fs-6 me-2">Melody Macy</span>
                      <span className="badge badge-light">Marketing Analytic</span>
                    </div>
                    {/*end::Info*/}
                  </a>
                  {/*end::User*/}
                  {/*begin::User*/}
                  <a href="#" className="p-3 mb-1 rounded d-flex align-items-center bg-state-light bg-state-opacity-50">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-35px symbol-circle me-5">
                      <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Info*/}
                    <div className="fw-bold">
                      <span className="text-gray-800 fs-6 me-2">Max Smith</span>
                      <span className="badge badge-light">Software Enginer</span>
                    </div>
                    {/*end::Info*/}
                  </a>
                  {/*end::User*/}
                  {/*begin::User*/}
                  <a href="#" className="p-3 mb-1 rounded d-flex align-items-center bg-state-light bg-state-opacity-50">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-35px symbol-circle me-5">
                      <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Info*/}
                    <div className="fw-bold">
                      <span className="text-gray-800 fs-6 me-2">Sean Bean</span>
                      <span className="badge badge-light">Web Developer</span>
                    </div>
                    {/*end::Info*/}
                  </a>
                  {/*end::User*/}
                  {/*begin::User*/}
                  <a href="#" className="p-3 mb-1 rounded d-flex align-items-center bg-state-light bg-state-opacity-50">
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-35px symbol-circle me-5">
                      <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Info*/}
                    <div className="fw-bold">
                      <span className="text-gray-800 fs-6 me-2">Brian Cox</span>
                      <span className="badge badge-light">UI/UX Designer</span>
                    </div>
                    {/*end::Info*/}
                  </a>
                  {/*end::User*/}
                </div>
                {/*end::Users*/}
              </div>
              {/*end::Suggestions*/}
              {/*begin::Results(add d-none to below element to hide the users list by default)*/}
              <div data-kt-search-element="results" className="d-none">
                {/*begin::Users*/}
                <div className="mh-375px scroll-y me-n7 pe-7">
                  {/*begin::User*/}
                  <div className="p-4 rounded d-flex flex-stack bg-active-lighten" data-user-id={0}>
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='0']" defaultValue={0} />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Emma Smith</a>
                        <div className="fw-bold text-muted">smith@kpmg.com</div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value={1}>Guest</option>
                        <option value={2} selected="selected">Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-gray-300 border-bottom border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div className="p-4 rounded d-flex flex-stack bg-active-lighten" data-user-id={1}>
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='1']" defaultValue={1} />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-danger text-danger fw-bold">M</span>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Melody Macy</a>
                        <div className="fw-bold text-muted">melody@altbox.com</div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value={1} selected="selected">Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-gray-300 border-bottom border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div className="p-4 rounded d-flex flex-stack bg-active-lighten" data-user-id={2}>
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='2']" defaultValue={2} />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Max Smith</a>
                        <div className="fw-bold text-muted">max@kt.com</div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="selected">Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-gray-300 border-bottom border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div className="p-4 rounded d-flex flex-stack bg-active-lighten" data-user-id={3}>
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='3']" defaultValue={3} />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Sean Bean</a>
                        <div className="fw-bold text-muted">sean@dellito.com</div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value={1}>Guest</option>
                        <option value={2} selected="selected">Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-gray-300 border-bottom border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div className="p-4 rounded d-flex flex-stack bg-active-lighten" data-user-id={4}>
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='4']" defaultValue={4} />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Brian Cox</a>
                        <div className="fw-bold text-muted">brian@exchange.com</div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="selected">Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-gray-300 border-bottom border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div className="p-4 rounded d-flex flex-stack bg-active-lighten" data-user-id={5}>
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='5']" defaultValue={5} />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-warning text-warning fw-bold">C</span>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Mikaela Collins</a>
                        <div className="fw-bold text-muted">mik@pex.com</div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value={1}>Guest</option>
                        <option value={2} selected="selected">Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-gray-300 border-bottom border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div className="p-4 rounded d-flex flex-stack bg-active-lighten" data-user-id={6}>
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='6']" defaultValue={6} />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Francis Mitcham</a>
                        <div className="fw-bold text-muted">f.mit@kpmg.com</div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="selected">Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-gray-300 border-bottom border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div className="p-4 rounded d-flex flex-stack bg-active-lighten" data-user-id={7}>
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='7']" defaultValue={7} />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-danger text-danger fw-bold">O</span>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Olivia Wild</a>
                        <div className="fw-bold text-muted">olivia@corpmail.com</div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value={1}>Guest</option>
                        <option value={2} selected="selected">Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-gray-300 border-bottom border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div className="p-4 rounded d-flex flex-stack bg-active-lighten" data-user-id={8}>
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='8']" defaultValue={8} />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-primary text-primary fw-bold">N</span>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Neil Owen</a>
                        <div className="fw-bold text-muted">owen.neil@gmail.com</div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value={1} selected="selected">Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-gray-300 border-bottom border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div className="p-4 rounded d-flex flex-stack bg-active-lighten" data-user-id={9}>
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='9']" defaultValue={9} />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-23.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Dan Wilson</a>
                        <div className="fw-bold text-muted">dam@consilting.com</div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="selected">Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-gray-300 border-bottom border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div className="p-4 rounded d-flex flex-stack bg-active-lighten" data-user-id={10}>
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='10']" defaultValue={10} />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-danger text-danger fw-bold">E</span>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Emma Bold</a>
                        <div className="fw-bold text-muted">emma@intenso.com</div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value={1}>Guest</option>
                        <option value={2} selected="selected">Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-gray-300 border-bottom border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div className="p-4 rounded d-flex flex-stack bg-active-lighten" data-user-id={11}>
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='11']" defaultValue={11} />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-12.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Ana Crown</a>
                        <div className="fw-bold text-muted">ana.cf@limtel.com</div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value={1} selected="selected">Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-gray-300 border-bottom border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div className="p-4 rounded d-flex flex-stack bg-active-lighten" data-user-id={12}>
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='12']" defaultValue={12} />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-info text-info fw-bold">A</span>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Robert Doe</a>
                        <div className="fw-bold text-muted">robert@benko.com</div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="selected">Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-gray-300 border-bottom border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div className="p-4 rounded d-flex flex-stack bg-active-lighten" data-user-id={13}>
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='13']" defaultValue={13} />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-13.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">John Miller</a>
                        <div className="fw-bold text-muted">miller@mapple.com</div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="selected">Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-gray-300 border-bottom border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div className="p-4 rounded d-flex flex-stack bg-active-lighten" data-user-id={14}>
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='14']" defaultValue={14} />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-success text-success fw-bold">L</span>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Lucy Kunic</a>
                        <div className="fw-bold text-muted">lucy.m@fentech.com</div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value={1}>Guest</option>
                        <option value={2} selected="selected">Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-gray-300 border-bottom border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div className="p-4 rounded d-flex flex-stack bg-active-lighten" data-user-id={15}>
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='15']" defaultValue={15} />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-21.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Ethan Wilder</a>
                        <div className="fw-bold text-muted">ethan@loop.com.au</div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value={1} selected="selected">Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-gray-300 border-bottom border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div className="p-4 rounded d-flex flex-stack bg-active-lighten" data-user-id={16}>
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='16']" defaultValue={16} />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-danger text-danger fw-bold">M</span>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a href="#" className="mb-2 text-gray-900 fs-5 fw-bolder text-hover-primary">Melody Macy</a>
                        <div className="fw-bold text-muted">melody@altbox.com</div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="selected">Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                </div>
                {/*end::Users*/}
                {/*begin::Actions*/}
                <div className="d-flex flex-center mt-15">
                  <button type="reset" id="kt_modal_users_search_reset" data-bs-dismiss="modal" className="btn btn-active-light me-3">Cancel</button>
                  <button type="submit" id="kt_modal_users_search_submit" className="btn btn-primary">Add Selected Users</button>
                </div>
                {/*end::Actions*/}
              </div>
              {/*end::Results*/}
              {/*begin::Empty*/}
              <div data-kt-search-element="empty" className="text-center d-none">
                {/*begin::Message*/}
                <div className="py-10 fw-bold">
                  <div className="mb-2 text-gray-600 fs-3">No users found</div>
                  <div className="text-muted fs-6">Try to search by username, full name or email...</div>
                </div>
                {/*end::Message*/}
                {/*begin::Illustration*/}
                <div className="px-5 text-center">
                  <img src="assets/media/illustrations/sketchy-1/1.png" alt className="w-100 h-200px h-sm-325px" />
                </div>
                {/*end::Illustration*/}
              </div>
              {/*end::Empty*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Search*/}
        </div>
        {/*end::Modal body*/}
      </div>
      {/*end::Modal content*/}
    </div>
    {/*end::Modal dialog*/}
  </div>
  {/*end::Modal - Users Search*/}
  {/*end::Modals*/}
  {/*begin::Javascript*/}
  {/*begin::Global Javascript Bundle(used by all pages)*/}
  {/*end::Global Javascript Bundle*/}
  {/*begin::Page Vendors Javascript(used by this page)*/}
  {/*end::Page Vendors Javascript*/}
  {/*begin::Page Custom Javascript(used by this page)*/}
  {/*end::Page Custom Javascript*/}
  {/*end::Javascript*/}
</div>

  </div>
  )
}

export default Dashboard