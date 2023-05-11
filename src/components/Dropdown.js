import { useState } from "react";
import '../css/Dropdown.css';

function Dropdown({ point }) {
    const [showAnalysis, setShowAnalysis] = useState(false);
    const [showQuoteText, setShowQuoteText] = useState(false);
    const [activeDetail, setActiveDetail] = useState(null);
    const [showFullTitle, setShowFullTitle] = useState(false);

    const handleAnalysisToggle = () => {
        setShowAnalysis(!showAnalysis);
        setShowQuoteText(false);
        setActiveDetail("analysis");
    };

    const handleQuoteTextToggle = () => {
        setShowQuoteText(!showQuoteText);
        setShowAnalysis(false);
        setActiveDetail("quoteText");
    };

    const handleTitleClick = () => {
        setShowFullTitle(!showFullTitle);
    };

    return (
        <div className="point-container">
            <button className="title-button" style={{ whiteSpace: showFullTitle ? 'normal' : 'nowrap'}} onClick={handleTitleClick}>
                {point.title.replace(/\b\w/g, c => c.toUpperCase())}
            </button>
            {(
                <div className="details-container">
                    <button className="details-button" onClick={handleAnalysisToggle}>
                        Analysis
                    </button>
                    {activeDetail === "analysis" && showAnalysis && <p className="details-text">{point.analysis === "Generated through the annotate view" ? "See title" : point.analysis}</p>}
                    <button className="details-button" onClick={handleQuoteTextToggle}>
                        Quote
                    </button>
                    {activeDetail === "quoteText" && showQuoteText && <p className="details-text">{point.quoteText}</p>}
                </div>
            )}
        </div>
    );

}

export default Dropdown