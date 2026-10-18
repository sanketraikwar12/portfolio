from fpdf import FPDF

def generate_resume(output_path):
    pdf = FPDF(orientation='P', unit='mm', format='A4')
    pdf.set_margins(left=15, top=12, right=15)
    pdf.set_auto_page_break(auto=False)
    pdf.add_page()
    
    PAGE_WIDTH = 210
    MARGIN = 15
    USABLE_WIDTH = PAGE_WIDTH - 2 * MARGIN  # 180mm
    
    DARK = (15, 23, 42)      # Slate 900
    BODY = (30, 41, 59)      # Slate 800 - crisp high contrast
    SUBTLE = (71, 85, 105)   # Slate 600
    BLUE = (29, 78, 216)     # Blue 700 - accessible high contrast
    LINE = (15, 23, 42)      # Slate 900

    # 1. Header: Name
    pdf.set_font('Helvetica', 'B', 17)
    pdf.set_text_color(*DARK)
    pdf.cell(USABLE_WIDTH, 7, 'SANKET RAIKWAR', align='C', new_x='LMARGIN', new_y='NEXT')
    
    # Contact Links
    pdf.set_font('Helvetica', '', 8.5)
    email_text = "raikwarsanket97@gmail.com"
    email_url = "mailto:raikwarsanket97@gmail.com"
    sep = "  |  "
    linkedin_text = "linkedin.com/in/sanket-raikwar-06793b391"
    linkedin_url = "https://www.linkedin.com/in/sanket-raikwar-06793b391/"
    github_text = "github.com/sanketraikwar12"
    github_url = "https://github.com/sanketraikwar12"

    w_email = pdf.get_string_width(email_text)
    w_sep1 = pdf.get_string_width(sep)
    w_li = pdf.get_string_width(linkedin_text)
    w_sep2 = pdf.get_string_width(sep)
    w_gh = pdf.get_string_width(github_text)
    total_w = w_email + w_sep1 + w_li + w_sep2 + w_gh
    
    start_x = MARGIN + (USABLE_WIDTH - total_w) / 2
    pdf.set_x(start_x)
    
    pdf.set_text_color(*BLUE)
    pdf.cell(w_email, 5, email_text, link=email_url)
    pdf.set_text_color(*SUBTLE)
    pdf.cell(w_sep1, 5, sep)
    pdf.set_text_color(*BLUE)
    pdf.cell(w_li, 5, linkedin_text, link=linkedin_url)
    pdf.set_text_color(*SUBTLE)
    pdf.cell(w_sep2, 5, sep)
    pdf.set_text_color(*BLUE)
    pdf.cell(w_gh, 5, github_text, link=github_url, new_x='LMARGIN', new_y='NEXT')
    
    pdf.ln(1)

    def add_section_title(title):
        pdf.ln(1.8)
        pdf.set_font('Helvetica', 'B', 9.5)
        pdf.set_text_color(*DARK)
        pdf.cell(USABLE_WIDTH, 4.5, title.upper(), new_x='LMARGIN', new_y='NEXT')
        pdf.set_draw_color(*LINE)
        pdf.set_line_width(0.35)
        pdf.line(MARGIN, pdf.get_y(), PAGE_WIDTH - MARGIN, pdf.get_y())
        pdf.ln(1.5)

    # 2. SUMMARY
    add_section_title("Summary")
    pdf.set_font('Helvetica', '', 8.3)
    pdf.set_text_color(*BODY)
    summary_text = (
        "B.Tech Computer Science Engineering student with hands-on experience in Full Stack Development, "
        "AI/GenAI, Machine Learning, and Data Analytics. Skilled in developing responsive web applications, "
        "REST APIs, AI-powered applications, database-driven systems, and interactive dashboards using React.js, "
        "Next.js, Node.js, Express.js, Django, FastAPI, Python, TypeScript, MongoDB, MySQL, SQL, and Power BI. "
        "Experienced in building practical projects and applying modern software development practices to solve "
        "real-world problems. Strong interest in Full Stack Development, AI Engineering, Generative AI, and Data Analytics."
    )
    pdf.multi_cell(USABLE_WIDTH, 3.7, summary_text)

    # 3. TECHNICAL SKILLS
    add_section_title("Technical Skills")
    skills = [
        ("Programming Languages:", "C, Python, JavaScript, TypeScript"),
        ("Frontend Development:", "React.js, Next.js, Bootstrap, Tailwind CSS, HTML, CSS"),
        ("Backend Development:", "Node.js, Express.js, Django, FastAPI"),
        ("Databases:", "MongoDB, MySQL, SQLite, PostgreSQL"),
        ("AI & Machine Learning:", "Scikit-learn, Pandas, NumPy, Data Preprocessing, Model Development, AI Applications, Generative AI"),
        ("Data Analytics:", "Power BI, SQL, Data Visualization, Dashboard Development"),
        ("Tools & Technologies:", "Git, GitHub, Postman, VS Code"),
    ]
    LABEL_W = 44
    VAL_W = USABLE_WIDTH - LABEL_W
    for label, items in skills:
        curr_y = pdf.get_y()
        pdf.set_font('Helvetica', 'B', 8.3)
        pdf.set_text_color(*DARK)
        pdf.set_xy(MARGIN, curr_y)
        pdf.cell(LABEL_W, 3.8, label)
        
        pdf.set_font('Helvetica', '', 8.3)
        pdf.set_text_color(*BODY)
        pdf.set_xy(MARGIN + LABEL_W, curr_y)
        pdf.multi_cell(VAL_W, 3.8, items)

    # 4. PROJECTS
    add_section_title("Projects")
    projects = [
        (
            "SmartShop - E-Commerce Platform",
            "Python, Django, Bootstrap, JavaScript, SQLite, PostgreSQL",
            [
                "Developed a full-stack e-commerce platform with product browsing, shopping cart, order management, and responsive user interfaces.",
                "Implemented database-driven functionality and an administrative dashboard for managing products and orders."
            ]
        ),
        (
            "VidMind-AI",
            "AI/ML, Python, FastAPI, Web Technologies",
            [
                "Developed an AI-focused application integrating intelligent video understanding and content workflows into a responsive web interface.",
                "Designed application workflows with an emphasis on practical AI functionality, automated insights, and low-latency interaction."
            ]
        ),
        (
            "Orbit",
            "React.js, JavaScript, Tailwind CSS, Web Technologies",
            [
                "Developed a modern web application with a responsive and user-focused interface.",
                "Implemented reusable components and interactive functionality to provide a consistent, polished user experience."
            ]
        )
    ]
    for name, tech, bullets in projects:
        pdf.set_font('Helvetica', 'B', 8.8)
        pdf.set_text_color(*DARK)
        pdf.cell(USABLE_WIDTH, 4.0, name, new_x='LMARGIN', new_y='NEXT')
        
        pdf.set_font('Helvetica', 'I', 7.8)
        pdf.set_text_color(*SUBTLE)
        pdf.cell(USABLE_WIDTH, 3.6, f"Technologies: {tech}", new_x='LMARGIN', new_y='NEXT')
        
        pdf.set_font('Helvetica', '', 8.3)
        pdf.set_text_color(*BODY)
        for bullet in bullets:
            pdf.set_x(MARGIN + 3)
            pdf.cell(3, 3.7, "-")
            pdf.multi_cell(USABLE_WIDTH - 6, 3.7, f" {bullet}")
        pdf.ln(0.6)

    # 5. CERTIFICATIONS
    add_section_title("Certifications")
    certs = [
        "AWS Cloud Practitioner (CLF-C02) - Course Completion, KodeKloud",
        "GitHub Copilot Certification, KodeKloud",
        "AI-Assisted Development, KodeKloud",
        "Building AI Agents with Claude Agent SDK, KodeKloud",
        "Learning Linux Basics Course & Labs, KodeKloud",
        "Computer Architecture, KodeKloud",
    ]
    pdf.set_font('Helvetica', '', 8.3)
    pdf.set_text_color(*BODY)
    for cert in certs:
        pdf.set_x(MARGIN + 3)
        pdf.cell(3, 3.7, "-")
        pdf.multi_cell(USABLE_WIDTH - 6, 3.7, f" {cert}")

    # 6. HACKATHONS & TECHNICAL ACTIVITIES
    add_section_title("Hackathons & Technical Activities")
    hackathons = [
        ("KRIYETA 5.0", "36-Hour Hackathon, Acropolis Institute of Engineering & Technology, Indore"),
        ("SISTec Innovation Hackathon 3.0", "SISTec, Bhopal"),
        ("AI Agent Builder Workshop", "BotCampus AI"),
        ("Viksit Bharat Young Leaders Dialogue (VBYLD) 2027", "MY Bharat, Ministry of Youth Affairs & Sports")
    ]
    for title, org in hackathons:
        curr_y = pdf.get_y()
        pdf.set_x(MARGIN + 3)
        pdf.set_font('Helvetica', 'B', 8.3)
        pdf.set_text_color(*DARK)
        prefix = f"-  {title} - "
        w_pref = pdf.get_string_width(prefix)
        pdf.cell(w_pref, 3.7, prefix)
        
        pdf.set_font('Helvetica', '', 8.3)
        pdf.set_text_color(*BODY)
        pdf.set_xy(MARGIN + 3 + w_pref, curr_y)
        pdf.multi_cell(USABLE_WIDTH - 3 - w_pref, 3.7, org)

    # 7. EDUCATION
    add_section_title("Education")
    pdf.set_font('Helvetica', 'B', 8.8)
    pdf.set_text_color(*DARK)
    pdf.cell(110, 4.0, "Jagran Lakecity University")
    pdf.set_font('Helvetica', '', 8.3)
    pdf.set_text_color(*SUBTLE)
    pdf.cell(USABLE_WIDTH - 110, 4.0, "Expected Graduation: 2027", align='R', new_x='LMARGIN', new_y='NEXT')
    
    pdf.set_font('Helvetica', '', 8.3)
    pdf.set_text_color(*BODY)
    pdf.cell(USABLE_WIDTH, 3.7, "Bachelor of Technology (B.Tech) in Computer Science Engineering", new_x='LMARGIN', new_y='NEXT')

    pdf.output(output_path)
    print(f"Successfully generated {output_path}")

if __name__ == '__main__':
    generate_resume("public/resume.pdf")
