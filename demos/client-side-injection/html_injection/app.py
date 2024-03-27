from flask import Flask, request, render_template_string

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def search():
    if request.method == 'POST':
        query = request.form.get('query', '')
        return f'<h1>Search results for: {query}</h1>'
    return '''
    <form method="post">
        <label for="query">Enter your search query:</label><br>
        <input type="text" id="query" name="query"><br>
        <input type="submit" value="Search">
    </form>
    '''

if __name__ == '__main__':
    app.run(debug=True)
