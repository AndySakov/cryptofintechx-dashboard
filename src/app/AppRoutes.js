import React, { Component, Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const Dashboard = lazy(() => import('./dashboard/Dashboard'))

const Email = lazy(() => import('./apps/Email'))
const Chat = lazy(() => import('./apps/Chat'))
const Calendar = lazy(() => import('./apps/Calendar'))
const Contacts = lazy(() => import('./apps/Contacts'))

const Profile = lazy(() => import('./general-pages/Profile'))
const Invoice = lazy(() => import('./general-pages/Invoice'))
const Signin = lazy(() => import('./general-pages/Signin'))
const Signup = lazy(() => import('./general-pages/Signup'))
const Page404 = lazy(() => import('./general-pages/Page404'))

const Accordions = lazy(() => import('./ui-elements/Accordions'))
const Alerts = lazy(() => import('./ui-elements/Alerts'))
const Avatar = lazy(() => import('./ui-elements/Avatar'))
const Badges = lazy(() => import('./ui-elements/Badges'))
const Breadcrumbs = lazy(() => import('./ui-elements/Breadcrumbs'))
const Buttons = lazy(() => import('./ui-elements/Buttons'))
const Cards = lazy(() => import('./ui-elements/Cards'))
const Carousels = lazy(() => import('./ui-elements/Carousels'))
const Collapses = lazy(() => import('./ui-elements/Collapses'))
const Dropdowns = lazy(() => import('./ui-elements/Dropdowns'))
const Icons = lazy(() => import('./ui-elements/Icons'))
const Images = lazy(() => import('./ui-elements/Images'))
const ListGroup = lazy(() => import('./ui-elements/ListGroup'))
const MediaObject = lazy(() => import('./ui-elements/MediaObject'))
const Modals = lazy(() => import('./ui-elements/Modals'))
const Navigation = lazy(() => import('./ui-elements/Navigation'))
const Paginations = lazy(() => import('./ui-elements/Paginations'))
const Popover = lazy(() => import('./ui-elements/Popovers'))
const Progress = lazy(() => import('./ui-elements/Progress'))
const Spinners = lazy(() => import('./ui-elements/Spinners'))
const Toast = lazy(() => import('./ui-elements/Toast'))
const Tooltip = lazy(() => import('./ui-elements/Tooltips'))

const FormElements = lazy(() => import('./form/FormElements'))
const FormLayouts = lazy(() => import('./form/FormLayouts'))
const FormValidation = lazy(() => import('./form/FormValidation'))
const FormWizards = lazy(() => import('./form/FormWizards'))
const WysiwygEditor = lazy(() => import('./form/WysiwygEditor'))

const ChartJs = lazy(() => import('./charts/ChartJs'))

const BasicTable = lazy(() => import('./tables/BasicTable'))
const DataTables = lazy(() => import('./tables/DataTables'))

const Background = lazy(() => import('./utilities/Background'))
const Border = lazy(() => import('./utilities/Border'))
const Display = lazy(() => import('./utilities/Display'))
const Flex = lazy(() => import('./utilities/Flex'))
const Height = lazy(() => import('./utilities/Height'))
const Margin = lazy(() => import('./utilities/Margin'))
const Padding = lazy(() => import('./utilities/Padding'))
const Position = lazy(() => import('./utilities/Position'))
const Typography = lazy(() => import('./utilities/Typography'))
const Width = lazy(() => import('./utilities/Width'))
const Extras = lazy(() => import('./utilities/Extras'))


export class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback=''>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard"></Redirect>
          </Route>
          <Route exact path="/dashboard" component={ Dashboard } />

          <Route exact path="/apps/email" component={ Email } />
          <Route exact path="/apps/chat" component={ Chat } />
          <Route exact path="/apps/calendar" component={ Calendar } />
          <Route exact path="/apps/contacts" component={ Contacts } />

          <Route exact path="/general-pages/profile" component={ Profile } />
          <Route exact path="/general-pages/invoice" component={ Invoice } />
          <Route exact path="/general-pages/signin" component={ Signin } />
          <Route exact path="/general-pages/signup" component={ Signup } />
          <Route exact path="/general-pages/page-404" component={ Page404 } />

          <Route exact path="/ui-elements/accordions" component={ Accordions } />
          <Route exact path="/ui-elements/alerts" component={ Alerts } />
          <Route exact path="/ui-elements/avatar" component={ Avatar } />
          <Route exact path="/ui-elements/badges" component={ Badges } />
          <Route exact path="/ui-elements/breadcrumbs" component={ Breadcrumbs } />
          <Route exact path="/ui-elements/buttons" component={ Buttons } />
          <Route exact path="/ui-elements/cards" component={ Cards } />
          <Route exact path="/ui-elements/carousel" component={ Carousels } />
          <Route exact path="/ui-elements/collapse" component={ Collapses } />
          <Route exact path="/ui-elements/dropdowns" component={ Dropdowns } />
          <Route exact path="/ui-elements/icons" component={ Icons } />
          <Route exact path="/ui-elements/images" component={ Images } />
          <Route exact path="/ui-elements/list-group" component={ ListGroup } />
          <Route exact path="/ui-elements/media-object" component={ MediaObject } />
          <Route exact path="/ui-elements/modals" component={ Modals } />
          <Route exact path="/ui-elements/navigation" component={ Navigation } />
          <Route exact path="/ui-elements/pagination" component={ Paginations } />
          <Route exact path="/ui-elements/popover" component={ Popover } />
          <Route exact path="/ui-elements/progress" component={ Progress } />
          <Route exact path="/ui-elements/spinners" component={ Spinners } />
          <Route exact path="/ui-elements/toast" component={ Toast } />
          <Route exact path="/ui-elements/tooltip" component={ Tooltip } />

          <Route exact path="/form/form-elements" component={ FormElements } />
          <Route exact path="/form/form-layouts" component={ FormLayouts } />
          <Route exact path="/form/form-validation" component={ FormValidation } />
          <Route exact path="/form/form-wizards" component={ FormWizards } />
          <Route exact path="/form/wysiwyg-editor" component={ WysiwygEditor } />

          <Route exact path="/charts/chartjs" component={ ChartJs } />

          <Route exact path="/tables/basic-table" component={ BasicTable } />
          <Route exact path="/tables/data-tables" component={ DataTables } />

          <Route exact path="/utilities/background" component={ Background } />
          <Route exact path="/utilities/border" component={ Border } />
          <Route exact path="/utilities/display" component={ Display } />
          <Route exact path="/utilities/flex" component={ Flex } />
          <Route exact path="/utilities/height" component={ Height } />
          <Route exact path="/utilities/margin" component={ Margin } />
          <Route exact path="/utilities/padding" component={ Padding } />
          <Route exact path="/utilities/position" component={ Position } />
          <Route exact path="/utilities/typography" component={ Typography } />
          <Route exact path="/utilities/width" component={ Width } />
          <Route exact path="/utilities/extras" component={ Extras } />

        </Switch>
      </Suspense>
    )
  }
}

export default AppRoutes
