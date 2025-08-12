import React from 'react';
import '../styles/Projects.css';
import { Link } from 'react-router-dom';

export function Projects() {
  return (
    <div className="projects">
      <div className="container">
        <h1 className="page-title">Projects</h1>
        
        {/* TeamBuilder Project Showcase */}
        <div className="project-showcase fade-in">
          <div className="project-header">
            <div className="project-icon">👥</div>
            <div className="project-title-section">
              <h2>TeamBuilder</h2>
              <p className="project-subtitle">Java Application for Automated Intern Team Assignment</p>
              <div className="project-meta">
                <span className="project-type">Client Project</span>
                <span className="project-duration">Requirements Gathering → Development → Delivery</span>
              </div>
            </div>
          </div>

          <div className="project-overview card slide-in">
            <h3>Project Overview</h3>
            <p>
              Developed a Java console application for Accelerated Software, Inc. to automate their 
              intern team assignment process. The application processes CSV data and creates balanced 
              teams based on specific business rules, reducing manual team building from days to minutes.
            </p>
          </div>

          <div className="project-details">
            <div className="detail-section card">
              <h3>Client Requirements</h3>
              <div className="requirements-list">
                <div className="requirement-item scale-in">
                  <span className="requirement-icon">📅</span>
                  <div>
                    <strong>Start Date Proximity:</strong> No two interns on the same team should start more than 2 weeks apart
                  </div>
                </div>
                <div className="requirement-item">
                  <span className="requirement-icon">👥</span>
                  <div>
                    <strong>Team Composition:</strong> No team should contain both 1st and 3rd year interns
                  </div>
                </div>
                <div className="requirement-item">
                  <span className="requirement-icon">🚫</span>
                  <div>
                    <strong>First Year Restriction:</strong> No team should consist only of 1st year interns
                  </div>
                </div>
                <div className="requirement-item">
                  <span className="requirement-icon">⚡</span>
                  <div>
                    <strong>Performance:</strong> Process 100+ interns in under 5 minutes
                  </div>
                </div>
                <div className="requirement-item">
                  <span className="requirement-icon">📊</span>
                  <div>
                    <strong>Data Format:</strong> CSV input/output with team assignments
                  </div>
                </div>
              </div>
            </div>

            <div className="detail-section card">
              <h3>Technical Implementation</h3>
              <div className="tech-details">
                <div className="tech-stack">
                  <h4>Technology Stack</h4>
                  <div className="tech-tags">
                    <span className="tech-tag">Java</span>
                    <span className="tech-tag">OpenCSV</span>
                    <span className="tech-tag">LocalDate API</span>
                    <span className="tech-tag">Algorithm Design</span>
                  </div>
                </div>
                <div className="algorithm-details">
                  <h4>Algorithm Approach</h4>
                  <ul>
                    <li><strong>Sorting Strategy:</strong> Interns sorted by start date for optimal grouping</li>
                    <li><strong>Team Building:</strong> Greedy algorithm that groups interns based on constraints</li>
                    <li><strong>Constraint Checking:</strong> Validates date proximity and year compatibility</li>
                    <li><strong>Edge Case Handling:</strong> Flags unassignable interns for manual review</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="detail-section card">
              <h3>Development Process</h3>
              <div className="process-timeline">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Requirements Gathering</h4>
                    <p>Analyzed client needs through email communication, clarifying constraints and edge cases</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Design & Planning</h4>
                    <p>Designed algorithm to handle team constraints while maintaining performance requirements</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Implementation</h4>
                    <p>Built Java application with CSV processing, constraint validation, and team assignment logic</p>
                  </div>
                </div>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Testing & Delivery</h4>
                    <p>Delivered JAR file for easy deployment, with client feedback leading to edge case improvements</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="detail-section card">
              <h3>Key Features</h3>
              <div className="features-grid">
                <div className="feature-item">
                  <span className="feature-icon">📁</span>
                  <h4>CSV Processing</h4>
                  <p>Reads intern data from CSV and outputs team assignments</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">⚖️</span>
                  <h4>Constraint Validation</h4>
                  <p>Automatically enforces business rules for team composition</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🚨</span>
                  <h4>Edge Case Handling</h4>
                  <p>Flags problematic assignments for manual review</p>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">⚡</span>
                  <h4>Performance Optimized</h4>
                  <p>Processes large datasets efficiently with algorithmic optimization</p>
                </div>
              </div>
            </div>

            <div className="detail-section card">
              <h3>Client Communication</h3>
              <div className="communication-highlights">
                <div className="highlight-item">
                  <h4>Initial Requirements</h4>
                  <p>Client described pain points with manual team building and provided specific constraints</p>
                </div>
                <div className="highlight-item">
                  <h4>Clarification Questions</h4>
                  <p>Asked detailed questions about data format, team composition, and edge cases</p>
                </div>
                <div className="highlight-item">
                  <h4>Iterative Development</h4>
                  <p>Delivered working solution and gathered feedback for improvements</p>
                </div>
                <div className="highlight-item">
                  <h4>Final Delivery</h4>
                  <p>Provided executable JAR file with documentation for easy deployment</p>
                </div>
              </div>
            </div>

            <div className="detail-section card">
              <h3>Code Highlights</h3>
              <div className="code-snippets">
                <div className="snippet-item">
                  <h4>Team Building Algorithm</h4>
                  <pre className="code-preview">
{`private static void buildTeams() {
    interns.sort(Comparator.comparing(i -> i.startDate));
    List<Intern> sortedInterns = new ArrayList<>(interns);
    
    while (!sortedInterns.isEmpty()) {
        List<Intern> team = new ArrayList<>();
        Intern unplacedIntern = sortedInterns.get(0);
        team.add(unplacedIntern);
        sortedInterns.remove(unplacedIntern);
        
        // Group remaining interns with constraints
        Iterator<Intern> it = sortedInterns.iterator();
        while (it.hasNext()) {
            Intern intern = it.next();
            if(canJoinTeam(team, intern)) {
                team.add(intern);
                it.remove();
            }
        }
        teams.add(team);
    }
}`}
                  </pre>
                </div>
                <div className="snippet-item">
                  <h4>Constraint Validation</h4>
                  <pre className="code-preview">
{`private static boolean canJoinTeam(List<Intern> team, Intern intern) {
    if (team.isEmpty()) return true;
    
    Intern earliest = team.get(0);
    boolean dateCheck = isWithinTwoWeeks(earliest, intern);
    if(!dateCheck) return false;
    
    // Check for no first+third year teams
    boolean hasFirstYear = false;
    boolean hasThirdYear = false;
    
    for(Intern x : team) {
        if(x.year.equals("1")) hasFirstYear = true;
        else if(x.year.equals("3")) hasThirdYear = true;
    }
    
    if ((hasFirstYear && intern.year.equals("3")) || 
        (hasThirdYear && intern.year.equals("1"))) {
        return false;
    }
    
    return true;
}`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="detail-section card">
              <h3>Project Impact</h3>
              <div className="impact-metrics">
                <div className="metric-item">
                  <span className="metric-value">100+</span>
                  <span className="metric-label">Interns Processed</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">Days → Minutes</span>
                  <span className="metric-label">Time Reduction</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">Automated</span>
                  <span className="metric-label">Team Assignment</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">Constraint</span>
                  <span className="metric-label">Enforcement</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Section */}
        <div className="other-projects">
          <h2>Other Projects</h2>
          <div className="projects-grid">
            <Link to="/" className="project-card card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span>🎮</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Bullet Bang</h3>
                <p>Multiplayer card game built with Unity and Photon Fusion</p>
                <div className="project-tech">
                  <span className="tech-tag">Unity</span>
                  <span className="tech-tag">C#</span>
                  <span className="tech-tag">Photon</span>
                </div>
              </div>
            </Link>

            <Link to="/trees" className="project-card card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span>🌳</span>
                </div>
              </div>
              <div className="project-content">
                <h3>Trees Density Visualization</h3>
                <p>Interactive data visualization with Three.js and D3.js</p>
                <div className="project-tech">
                  <span className="tech-tag">Three.js</span>
                  <span className="tech-tag">D3.js</span>
                  <span className="tech-tag">JavaScript</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
