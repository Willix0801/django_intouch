from geraldo import Report, ReportBand, DetailBand, SystemField, Label, ObjectValue, ReportGroup, Image
from geraldo.generators import PDFGenerator
from geraldo.utils import cm, BAND_WIDTH, TA_CENTER, TA_RIGHT
import os
cur_dir = os.path.dirname(os.path.abspath(__file__))

family = [
    {'name': 'William', 'age': 29, 'weight': 55.7, 'genre': 'female', 'status': 'parent'},
    {'name': 'Marinho', 'age': 28, 'weight': 76, 'genre': 'male', 'status': 'parent'},
    {'name': 'Tarsila', 'age': 4, 'weight': 16.2, 'genre': 'female', 'status': 'child'},
    {'name': 'Linus', 'age': 0, 'weight': 1.5, 'genre': 'male', 'status': 'child'},
    {'name': 'Mychelle', 'age': 19, 'weight': 50, 'genre': 'female', 'status': 'nephew'},
    {'name': 'Mychell', 'age': 17, 'weight': 55, 'genre': 'male', 'status': 'niece'},
]


class MyFamilyReport(Report):
    title = 'Invoice PDF'

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
        'AlexBrush-Regular': os.path.join(cur_dir, '../main/static/fonts/AlexBrush-Regular.ttf'),    
                        }

   
    default_style = {'fontName': 'Calibri','fontSize': 10} 
    margin_left = 0.5*cm
    margin_top = 0.1*cm
    margin_right = 0.5*cm
    margin_bottom = 0.5*cm
    class band_detail(DetailBand):

        height = 0.7*cm
        elements = [
            # ObjectValue(expression='name', left=0.5*cm),
            # ObjectValue(expression='age', left=5*cm),
            # ObjectValue(expression='weight', left=6.5*cm),
        ]
        borders = {'bottom': True}

    class band_page_header(ReportBand):

        height = 1.3*cm
        elements = [
            Image(left=1*cm, top=0.1*cm, right=10*cm, bottom=0.5*cm, filename=os.path.join(cur_dir, '../main/static/images/intouchlogo.png')),
            SystemField(expression='%(report_title)s', top=0.1*cm, left=0, width=BAND_WIDTH,
                style={'fontName': 'Calibri', 'fontSize': 14, 'alignment': TA_CENTER}),
            # SystemField(expression=u'Page %(page_number)d of %(page_count)d', top=0.1*cm,
            #     width=BAND_WIDTH, style={'alignment': TA_RIGHT}),
            # Label(text="Name", top=0.8*cm, left=0.5*cm),
            # Label(text="Age", top=0.8*cm, left=5*cm),
            # Label(text="Weight", top=0.8*cm, left=6.5*cm),
        ]
        # borders = {'all': True}

    class band_page_footer(ReportBand):
        height = 0.5*cm
        elements = [
            Label(text='Intouch Communications', top=0.1*cm),
            # SystemField(expression='Printed in %(now:%Y, %b %d)s at %(now:%H:%M)s', top=0.1*cm,
            #     width=BAND_WIDTH, style={'alignment': TA_RIGHT}),

            SystemField(expression=u'Page %(page_number)d of %(page_count)d', top=0.1*cm,
                width=BAND_WIDTH, style={'alignment': TA_RIGHT}),
            ]
        borders = {'top': True}

    class band_summary(ReportBand):
        height = 0.5*cm
        elements = [
            Label(text='Totals:'),
            ObjectValue(expression='avg(age)', left=5*cm, style={'fontName': 'Helvetica-Bold'}),
            ObjectValue(expression='sum(weight)', left=6.5*cm, style={'fontName': 'Helvetica-Bold'}),
            ]
        borders = {'top': True}

    # groups = [
    #     ReportGroup(
    #         attribute_name='genre',
    #         band_header=DetailBand(
    #             height=0.6*cm,
    #             elements=[
    #                 ObjectValue(expression='genre', style={'fontSize': 12})
    #             ]
    #         ),
    #         band_footer=ReportBand(
    #             height = 0.5*cm,
    #             elements = [
    #                 ObjectValue(expression='avg(age)', left=5*cm),
    #                 ObjectValue(expression='sum(weight)', left=6.5*cm),
    #                 ],
    #             borders = {'top': True},
    #         ),
    #     ),
    #     ReportGroup(
    #         attribute_name='status',
    #         band_header=DetailBand(
    #             height=0.6*cm,
    #             elements=[
    #                 ObjectValue(expression='status', style={'fontSize': 11}, left=0.2*cm)
    #             ]
    #         )
    #     ),
    # ]

my_report = MyFamilyReport(queryset=family)
my_report.generate_by(PDFGenerator, filename='family.pdf')