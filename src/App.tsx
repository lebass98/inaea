import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import { NoticePage, NoticeView, NoticeWrite } from './components/notice'
import { FAQPage, FAQView, FAQWrite } from './components/faq'
import { InfoCenterPage, InfoCenterView, InfoCenterWrite } from './components/infocenter'
import { ResearchPage, ResearchView } from './components/research'
import { SurveyPage, SurveyView } from './components/survey'
import { PromotionPage, PromotionView } from './components/promotion'
import { InquiryPage } from './components/inquiry'
import NotificationPage from './components/notification'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/notice/view/:id" element={<NoticeView />} />
        <Route path="/notice/write" element={<NoticeWrite />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/faq/view/:id" element={<FAQView />} />
        <Route path="/faq/write" element={<FAQWrite />} />
        <Route path="/infocenter" element={<InfoCenterPage />} />
        <Route path="/infocenter/view/:id" element={<InfoCenterView />} />
        <Route path="/infocenter/write" element={<InfoCenterWrite />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/research/view/:id" element={<ResearchView />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/survey/view/:id" element={<SurveyView />} />
        <Route path="/promotion" element={<PromotionPage />} />
        <Route path="/promotion/view/:id" element={<PromotionView />} />
        <Route path="/inquiry" element={<InquiryPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
