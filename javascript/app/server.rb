require "sinatra"

set :views, Proc.new {File.join(root, '..', "views")}
set :public_folder, Proc.new {File.join(root, '..', "public")}

enable :sessions

get "/" do 
	session[:message] = "hello"
	erb :index

end


post "/button_clicked" do
	session[:message]="hello again"
	erb :index

end

