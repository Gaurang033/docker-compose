from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)

TODOS = {
    1: "testing"
}

cors = CORS(app, resources={r"/todos/*": {"origins": "*"}})


class Todo(Resource):
    def get(self, todo_id):
        return TODOS
        # return {todo_id: todos[todo_id]}

    def put(self, todo_id):
        TODOS[todo_id] = request.form['task']
        return {todo_id: TODOS[todo_id]}

    def delete(self, todo_id):
        todo_id = int(todo_id)
        # deleted = {todo_id: TODOS[todo_id]}
        if todo_id in TODOS:
            del TODOS[todo_id]
        return TODOS


class TodoList(Resource):
    def get(self):
        return TODOS

    def post(self):
        args = request.form
        todo_id = int(max(TODOS.keys())) + 1
        # todo_id = 'todo%i' % todo_id
        TODOS[todo_id] = args['task']
        return {'id': todo_id, 'task': TODOS[todo_id]}, 201


api.add_resource(TodoList, '/todos')
api.add_resource(Todo, '/todos/<todo_id>')


if __name__ == '__main__':
    app.run(debug=True, port=5001)
