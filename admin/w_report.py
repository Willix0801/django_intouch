from geraldo import Report, ReportBand, DetailBand, SystemField, Label, ObjectValue, ReportGroup, landscape,\
Image, Rect
from datetime import datetime
from geraldo.generators import PDFGenerator
from geraldo.utils import BAND_WIDTH, TA_CENTER, TA_RIGHT, TA_LEFT, cm
from reportlab.lib import colors
from reportlab.lib.pagesizes import A5, A4
import os

# from reportlab.lib.units import cm

cur_dir = os.path.dirname(os.path.abspath(__file__))




data = [
	{'name': 'William', 'hobby': 'Coding'},
	{'name': 'Nziza', 'hobby': 'Bear'}
]

class simple(Report):
	additional_fonts = {
        'Candara': os.path.join(cur_dir, '../main/static/fonts/Candara.ttf'),  # full path to font file   
        'Candara-Bold': os.path.join(cur_dir, '../main/static/fonts/Candarab.ttf'), 
        'Candara-Italic': os.path.join(cur_dir, '../main/static/fonts/Candarai.ttf'),  
        'Calibri': os.path.join(cur_dir, '../main/static/fonts/Calibri.ttf'),  # full path to font file   
        'Calibri-Bold': os.path.join(cur_dir, '../main/static/fonts/Calibri_Bold.ttf'), 
        'Calibri-Italic': os.path.join(cur_dir, '../main/static/fonts/Calibri_Italic.ttf'), 
        'Calibri-Bold-Italic': os.path.join(cur_dir, '../main/static/fonts/Calibri_Bold_Italic.ttf'), 
        'Trebuchet-MS': os.path.join(cur_dir, '../main/static/fonts/Trebuchet_MS.ttf'),  
        'Trebuchet-MS-Bold': os.path.join(cur_dir, '../main/static/fonts/Trebuchet_MS_Bold.ttf'),     
    }
	title = 'Invoice'

    # default_style = {'fontName': 'Calibri','fontSize': 10} 

	author = 'William Muganwa'
	default_style = {'fontName':'Calibri', 'fontSize':10}
	page_size = landscape(A4)
	margin_left = 1.8*cm
	# margin_top = 0.5*cm
	# margin_right = 0.5*cm
	# margin_bottom = 0.5*cm


	class band_page_header(ReportBand):
		height = 0.5*cm
		elements = [
			Image(left=0.5*cm, top=0.1*cm, width=4*cm, height=5.12*cm, filename=os.path.join(cur_dir, '../main/static/images/intouchlogo.png')),
			Label(text='<b>intouch</b>', top=0.8*cm, left=2.8*cm, width=BAND_WIDTH,style={'alignment':TA_LEFT,'fontName': 'Candara-Bold','fontSize':18}),
			Label(text='<b>COMMUNICATIONS</b>', top=1.5*cm, left=2.8*cm, width=BAND_WIDTH,style={'alignment':TA_LEFT,'fontName': 'Candara-Bold','fontSize':10}),
			Label(text='<b>Intouch Communications Ltd</b>', top=2.2*cm, width=BAND_WIDTH, left=22.6*cm, style={'fontName': 'Candara-Bold','fontSize':9}),
			Label(text='<b>3rd Floor, Prince House, Remera</b>', top=2.6*cm, width=BAND_WIDTH, left=22.2*cm, style={'fontName': 'Candara-Bold', 'fontSize':9}),
			Label(text='<b>Tel 1: +(250)-788-304-441,</b>', top=3*cm, width=BAND_WIDTH, left=23.3*cm, style={'fontName': 'Candara-Bold', 'fontSize':9}),
			Label(text='<b>Tel 1: +(250)-785-971-082</b>', top=3.4*cm, width=BAND_WIDTH, left=23.4*cm, style={'fontName': 'Candara-Bold', 'fontSize':9}),
			Label(text='<b>TIN: 102830733</b>', top=3.8*cm, width=BAND_WIDTH, left=24.6*cm, style={'fontName': 'Candara-Bold', 'fontSize':9}),
			# Label(text='<b>Intouch Communications Ltd</b>', top=0.2*cm, width=BAND_WIDTH,style={'alignment':TA_RIGHT,'fontName': 'Candara-Bold','fontSize':9}),
			# Label(text='<b>3rd Floor, Prince House, Remera</b>', top=0.6*cm, width=BAND_WIDTH, style={'alignment':TA_RIGHT, 'fontName': 'Candara-Bold', 'fontSize':9}),
			# Label(text='<b>Tel 1: +(250)-788-304-441,</b>', top=1*cm, width=BAND_WIDTH, style={'alignment':TA_RIGHT, 'fontName': 'Candara-Bold', 'fontSize':9}),
			# Label(text='<b>Tel 1: +(250)-785-971-082</b>', top=1.4*cm, width=BAND_WIDTH, style={'alignment':TA_RIGHT, 'fontName': 'Candara-Bold', 'fontSize':9}),
			# Label(text='<b>TIN: 102830733</b>', top=1.8*cm, width=BAND_WIDTH, style={'alignment':TA_RIGHT, 'fontName': 'Candara-Bold', 'fontSize':9}),
			# SystemField(expression= '%(report_title)s', top=0.1*cm, left=0, width=BAND_WIDTH,
			# 	style={'fontName' : 'Helvetica', 'fontSize' : 10, 'alignment' : TA_CENTER}
			# 	)
		]

	class band_page_footer(ReportBand):
		height = 3*cm
		elements = [
			Label(text = '<b>PAYMENT MODES: CHEQUE, BANK TRANSFER</b>', width=BAND_WIDTH, top=0.1*cm, style={'fontName': 'Candara-Bold', 'fontSize': 12,}),
			Label(text = 'Payment to be done to the account name and number shown below, Currency in Rwandan Francs', width=BAND_WIDTH, top=0.5*cm, style={'fontSize':12, 'fontName': 'Calibri'}),
			Label(text = 'Account name: INTOUCH COMMUNICATIONS LTD', width=BAND_WIDTH, top=1.2*cm, style={'fontSize':12, 'fontName': 'Calibri'}),
			Label(text = 'Bank Name: KCB', width=BAND_WIDTH, top=1.7*cm, style={'fontSize':10, 'fontName': 'Calibri'}),
			Label(text = 'Branch: Remera', width=BAND_WIDTH, top=2.1*cm, style={'fontSize':10, 'fontName': 'Calibri'}),
			Label(text = 'Account No.:4401710142', width=BAND_WIDTH, top=2.5*cm, style={'fontSize':10, 'fontName': 'Calibri'}),
			Label(text = 'Currency: RWANDAN FRANCS', width=BAND_WIDTH, top=2.9*cm, style={'fontSize':10, 'fontName': 'Calibri'}),
			# SystemField(expression='Printed in %(now:%Y, %b %d)s at%(now:%H:%M)s', top=0.1*cm,
			# 	width=BAND_WIDTH, style={'alignment': TA_RIGHT}),  was for time printed

			# SystemField(expression=u'Page %(page_number)d of %(page_count)d', top=0.1*cm, 
			# 	width=BAND_WIDTH, style= {'alignment': TA_RIGHT, 'fontName' : 'Helvetica', 
			# 	'fontSize' : 10},),
		]
		# borders = {'top': True}
	class band_begin(ReportBand):
		height = 0.3*cm
		elements = [ 
               Label(text='<b>Invoice</b>', top=4*cm, width=BAND_WIDTH, left=25.5*cm, style={'fontName': 'Candara-Bold', 'fontSize':10}),
               # ObjectValue(expression='rick', left=25.5*cm,top=4.7*cm,width=BAND_WIDTH,style={'fontName': 'Calibri-Bold','fontSize':10}), 
               Label(text='<b>Attention</b>', top=4.9*cm, left=0.5*cm, width=BAND_WIDTH, style={'alignment':TA_LEFT, 'fontName': 'Candara-Bold', 'fontSize':10}),
               Label(text='<b>Customer No</b>', top=5.7*cm, left=0.5*cm, width=BAND_WIDTH, style={'alignment':TA_LEFT, 'fontName': 'Candara-Bold', 'fontSize':10}),
               Label(text='<b>Our Reference</b>', top=6.7*cm, left=0.5*cm, width=BAND_WIDTH, style={'alignment':TA_LEFT, 'fontName': 'Candara-Bold', 'fontSize':10}),
               Label(text='<b>Customer</b>', top=5.7*cm, left=8*cm, width=BAND_WIDTH, style={'alignment':TA_LEFT, 'fontName': 'Candara-Bold', 'fontSize':10}),
               Label(text='<b>Description</b>', top=6.7*cm, left=8*cm, width=BAND_WIDTH, style={'alignment':TA_LEFT, 'fontName': 'Candara-Bold', 'fontSize':10}),
               Label(text='<b>Invoice Date</b>', top=5.7*cm, left=15.5*cm, width=BAND_WIDTH, style={'alignment':TA_LEFT, 'fontName': 'Candara-Bold', 'fontSize':10}),
               Label(text='<b>Invoice Due Date</b>', top=6.7*cm, left=15.5*cm, width=BAND_WIDTH, style={'alignment':TA_LEFT, 'fontName': 'Candara-Bold', 'fontSize':10}),
               Rect(left=0*cm, top=7.9*cm, width=2.5*cm, height=0.9*cm,fill=False,stroke=True),
               Label(text='<b>Item</b>', top=8.1*cm, left=0.5*cm, style={'fontName': 'Candara-Bold'}),
               Rect(left=2.5*cm, top=7.9*cm, width=9*cm, height=0.9*cm, fill=False,stroke=True),
               Label(text='<b>Description</>', top=8.1*cm, left=4*cm, style={'fontName': 'Candara-Bold', 'alignment': TA_CENTER}),
               Rect(left=11.5*cm, top=7.9*cm, width=5*cm, height=0.9*cm, fill=False,stroke=True),
               Label(text='<b>Qty</b>', top=8.1*cm, left=11.2*cm, style={'fontName': 'Candara-Bold', 'alignment': TA_CENTER}),
               Rect(left=16.5*cm, top=7.9*cm, width=6*cm, height=0.9*cm, fill=False,stroke=True),
               Label(text='UNIT PRICE(RWF)', top=8.1*cm, left=17*cm, style={'fontName': 'Candara-Bold', 'alignment': TA_CENTER}),
               Rect(left=22.5*cm, top=7.9*cm, width=4*cm, height=0.9*cm, fill=False,stroke=True),
               Label(text='SUM(RWF)', top=8.1*cm, left=22.3*cm, style={'fontName': 'Candara-Bold', 'alignment': TA_CENTER}),
               # Rect(left=0*cm, top=8.8*cm, width=26.5*cm, height=1.5*cm, fill=False,stroke=True),
               # Label(text='Invoice Details', top=9.3*cm, left=10.3*cm, style={'fontName': 'Candara-Bold', 'alignment': TA_CENTER}),
               Rect(left=0*cm, top=10.3*cm, width=22.5*cm, height=1.5*cm, fill=False,stroke=True),
               Label(text='VAT included in price', top=10.8*cm, left=0.5*cm, style={'fontName': 'Candara-Bold', 'alignment': TA_LEFT}),
               Rect(left=22.5*cm, top=10.3*cm, width=4*cm, height=1.5*cm, fill=False,stroke=True),
               # Empty Label
               Rect(left=0*cm, top=11.8*cm, width=13*cm, height=2.5*cm, fill=False,stroke=True),
               Label(text='Received By:_________________________________________', top=12.3*cm, left=0.5*cm, width=BAND_WIDTH, style={'fontSize': 12, 'fontName': 'Candara-Bold'}),
               Label(text='Date:__________________________________________________________', top=13.2*cm, left=0.5*cm, width=BAND_WIDTH, style={'fontName': 'Candara-Bold'}),
               Rect(left=13*cm, top=11.8*cm, width=3.5*cm, height=2.5*cm, fill=False,stroke=True),
               Label(text='Currency:', top=12.3*cm, left=13.7*cm, style={'fontSize': 12}),
               Label(text='RWF', top=12.9*cm, left=13.7*cm, style={'fontName': 'Candara-Bold'}),
               Rect(left=16.5*cm, top=11.8*cm, width=6*cm, height=0.9*cm, fill=False,stroke=True),
               Label(text='TOTAL EXCLU VAT:', top=12*cm, left=19.1*cm, style={'fontName': 'Candara-Bold'}),
               Rect(left=22.5*cm, top=11.8*cm, width=4*cm, height=0.9*cm, fill=False,stroke=True),
               Label(text='xxxxx', top=12*cm, left=24.2*cm, style={'fontName': 'Candara-Bold'}),
               Rect(left=16.5*cm, top=12.7*cm, width=6*cm, height=0.9*cm, fill=False,stroke=True),
               Label(text='VAT 18%:', top=12.9*cm, left=20.7*cm, style={'fontName': 'Candara-Bold'}),
               Rect(left=22.5*cm, top=12.7*cm, width=4*cm, height=0.9*cm, fill=False,stroke=True),
               Label(text='xxxxx', top=12.9*cm, left=24.2*cm, style={'fontName': 'Candara-Bold'}),
               Rect(left=16.5*cm, top=13.6*cm, width=6*cm, height=0.7*cm, fill=False,stroke=True),
               Label(text='TOTAL:', top=13.7*cm, left=20.8*cm, style={'fontName': 'Candara-Bold'}),
               Rect(left=22.5*cm, top=13.6*cm, width=4*cm, height=0.7*cm, fill=False,stroke=True),
               Label(text='xxxxx', top=13.7*cm, left=24.2*cm, style={'fontName': 'Candara-Bold'}),

               
               # Label Here
        ]		
   	class band_detail(ReportBand):
   		height = 2.5*cm
   		elements = [
   	    Rect(left=0*cm, top=8.8*cm, width=2.5*cm, height=0.9*cm,fill=False,stroke=True),
   	    # above is rectangle for item
   	    Rect(left=2.5*cm, top=8.8*cm, width=9*cm, height=0.9*cm, fill=False,stroke=True),
   	    # above is rectangle for description
   	    Rect(left=11.5*cm, top=8.8*cm, width=5*cm, height=0.9*cm, fill=False,stroke=True),
   	    # above is rectangle for qty
   	    Rect(left=16.5*cm, top=8.8*cm, width=6*cm, height=0.9*cm, fill=False,stroke=True),
   	    # above is rectangle for unit price
   	    Rect(left=22.5*cm, top=8.8*cm, width=4*cm, height=0.9*cm, fill=False,stroke=True),
   	    # above is rectangle for sum







   		]



report = simple(queryset=data)
report.generate_by(PDFGenerator, filename='simple.pdf')