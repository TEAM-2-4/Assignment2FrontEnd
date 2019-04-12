import VueRouter from 'vue-router'
import TourList from '@/components/TourList'
import AddTour from '@/components/AddTour'
import EditTour from '@/components/EditTour'
import GuideList from '@/components/GuideList'
import AddGuide from '@/components/AddGuide'
import EditGuide from '@/components/EditGuide'

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'TourList',
            component: TourList
      },
        {
            path: '/add-tour',
            name: 'AddTour',
            component: AddTour
      },
        {
            path: '/edit-tour/:id',
            name: 'EditTour',
            component: EditTour
      },
        {
            path: '/guides',
            name: 'GuideList',
            component: GuideList
      },
        {
            path: '/add-guide',
            name: 'AddGuide',
            component: AddGuide
      },
        {
            path: '/edit-guide/:id',
            name: 'EditGuide',
            component: EditGuide
      }
    ]
})
