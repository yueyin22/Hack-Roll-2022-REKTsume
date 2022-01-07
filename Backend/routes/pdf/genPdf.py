from fpdf import FPDF
import sys, json

def loadResumeDb():
	f = open('./routes/pdf/db.json', encoding="utf8")
	db = json.load(f)
	f.close()
	return db

class PDF(FPDF):	
	# Name and email
	def header(self):
		self.set_font('Arial', 'B', 15)
		
		#-------------------Name--------------------
		self.cell(80)
		self.cell(30, 10, 'Xia Fuxi', 'B', 0, 'C')
		self.ln(10)
		#------------------Email--------------------
		self.set_font('Arial', '', 14)
		self.cell(80)
		self.cell(30, 10, 'fuxi_xia@u.nus.edu', 0, 0, 'C')
		# Line Break
		self.ln(10)
		
    # Page footer
	def footer(self):
		self.set_y(-15)
		self.set_font('Arial', '', 8)
		self.cell(0, 10, str(self.page_no()), 0, 0, 'C')

def setColor(pdf):
	pdf.set_draw_color(151, 151, 151)
	pdf.set_fill_color(151, 151, 151)

def setSectionHeader(pdf, header):
	setColor(pdf)
	pdf.cell(0, 8, header, 1, 1, 'L', True)

def populateSection(pdf):
	pdf.cell(0, 8, '- Messed up overseas volunteering project', 0, 1, 'L')


if __name__ == "__main__":
	db = loadResumeDb()
	pdf = PDF()
	pdf.alias_nb_pages()
	pdf.add_page()
	pdf.set_font('Arial', '', 12)
	setSectionHeader(pdf, 'PROJECTS')
	populateSection(pdf)
	pdf.output('tut2.pdf', 'F')