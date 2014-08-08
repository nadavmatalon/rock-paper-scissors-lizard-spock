require "sinatra"

set :views, Proc.new {File.join(root, '..', "views")}
set :public_folder, Proc.new {File.join(root, '..', "public")}

get "/" do 
	session[:message] = "hello"
	erb :index

end
