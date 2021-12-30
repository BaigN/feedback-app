import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import { useState } from 'react'
import FeedbackData from './data/FeedbackData'

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id != id))
        }
    }
    return (
        <>
            <Header />
            <div className='container'>
                <FeedbackList feedback={feedback}
                    handleDeleteFromAppJS={(id) => deleteFeedback(id)} />
            </div>
        </>
    )
}

export default App